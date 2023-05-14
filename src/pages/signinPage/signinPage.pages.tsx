import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./signinPage.pages.css"
import { inject } from "mobx-react"
import NavBarSignIn from "../../components/Navbar/navbar.signin"
import { Footer } from "../../components/footer/footer.components"
import ErrorMessage from "../../components/ErrorMessage"

 const SignInPage = ({userStore}: any) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState(null)
     const {SignIn} = userStore
console.log(userStore)
    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
      console.log("hit")
      
        try {
          console.log(username, password)
           const result = await SignIn({username, password});
          console.log("userStore",userStore);
           document.location.href = "/homepage";
        } catch (error: any) {
          console.log(error)
          const errorMessage = error.response?.data?.message;
          console.log(errorMessage)
          setErrorMessage(errorMessage);
        }
      };

    // // console.log(handleSubmit(e))


    return (
        <React.Fragment>
            <div className = "signin-container">
            <NavBarSignIn />
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
            <input className="signin-input" 
                   type="password" 
                   placeholder="password" 
                   onChange= {e => setPassword(e.target.value)}
                   required/>
            <p> If you don't have an account, please <Link to="/signup"> sign up </Link>  </p>
            <button type="button" onClick = {(e) => handleSubmit(e)}> Sign In </button>
            </form>
        </div>
        <Footer />
        </React.Fragment>
        
    )
}

export default inject("userStore", "routerStore")(SignInPage)