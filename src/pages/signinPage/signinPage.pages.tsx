import React, { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { inject } from "mobx-react"
import toastify from "toastify-js"
import 'toastify-js/src/toastify.css'
import "./signinPage.pages.css"
import NavBarSignIn from "../../components/Navbar/navbar.signin"
import { Footer } from "../../components/footer/footer.components"
import ErrorMessage from "../../components/ErrorMessage"
import { userStore } from "../../stores/user.stores"
import { AuthContext } from "../../context/authContext/authContext"
import { FaEye, FaEyeSlash } from "react-icons/fa"

export const check = async({username, password}:any): Promise<any> => {
  const checkResult = await userStore.SignIn({username, password})
  // console.log(checkResult.data.username.user.id)
  return checkResult
}

 const SignInPage = ({userStore}: any) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null)
    const { user, updateUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

     const {SignIn} = userStore
      console.log(userStore)
       console.log(user)

      const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
      console.log("hit")
      
        try {
          console.log(username, password)
           const userData = await SignIn({username, password});
           console.log(userData)
           updateUser(userData)
          console.log(user)
          toastify({
            text:`${username} signin successful`,
            backgroundColor: "green",
            close:true,
            gravity: "top",
            duration: 3000
          }).showToast()
           navigate("/auth/homepage", { state: { data: userData.user.username }, replace: true }) ;
          
        } catch (error: any) {
          console.log(error)
          const errorMessage = error.response?.data?.message;
          toastify({
            text: "signin unsuccessful",
            duration: 3000,
            backgroundColor: "red",
            gravity: "top",
            close: true
          }).showToast()
          console.log(errorMessage)
          setErrorMessage(errorMessage);
        }
      };

    // // console.log(handleSubmit(e))


    return (
        <React.Fragment>
            <NavBarSignIn />
            <div className = "signin-container">

            <h2>please sign in with your details below</h2>

            {errorMessage && <ErrorMessage message={errorMessage} />}

            <form>
            <p className="signin-detail">Email Address</p>
            <input className = "signin-input" 
                   type="email" 
                   placeholder="email address" 
                   onChange={e => setUsername(e.target.value)}
                   required/>
            <p className="signin-detail">Password</p>
            <div>
            <input className="signin-input" 
                   type={showPassword ? "text" : "password"} 
                   placeholder="password" 
                   onChange= {e => setPassword(e.target.value)}
                   required/>
            </div>
            <button
              className="toggle-password-visibility"
              type="button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            <p> If you don't have an account, please <Link to="/signup"> sign up </Link>  </p>
            <button type="button" onClick = {(e) => handleSubmit(e)}> Sign In </button>
            </form>
        </div>
        <Footer />
        </React.Fragment>
        
    )
}

export default inject("userStore", "routerStore")(SignInPage)