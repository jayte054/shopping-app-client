import React from "react"
import { Link } from "react-router-dom"
import "./signupPage.pages.css"
import {useState} from "react"
import {inject} from "mobx-react"
import NavBarSignUp from "../../components/Navbar/navbar.signup"
import { Footer } from "../../components/footer/footer.components"
import ErrorMessage from "../../components/ErrorMessage"

 const SignUpPage = ({userStore, routerStore}: any) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState(null)
    const {SignUp} = userStore

    const handleSubmit = async(e:React.SyntheticEvent) => {
        try{
            e.preventDefault()
             await SignUp(username, password)
            document.location.href="/signin"

        }catch(error: any){
            const errorMessage = error.response.data.message
            setErrorMessage(errorMessage)
        }
    }

    return (
        <React.Fragment>
            <div className = "signup-container">
            <NavBarSignUp />
            <h2>please provide your sign up details below</h2>

            {errorMessage && <ErrorMessage message={errorMessage} />}

            <form >
            <p className="signup-detail">Email Address</p>
            <input className = "signup-input" 
                   type="email" 
                   placeholder="email address" 
                   onChange={e => setUsername(e.target.value)}
                   required/>
            <p className="signup-detail">Password</p>
            <input className="signup-input" 
                   type="password" 
                   placeholder="password" 
                   onChange={e => setPassword(e.target.value)}
                   required/>
            <p> If you already have an account, please <Link to="/signin"> sign in </Link>  </p>
            <button type= "button" onClick={(e)=>handleSubmit(e)}> Sign Up </button>
            </form>
        </div>
        <Footer />
        </React.Fragment>
        
    )
}

export default inject("userStore", "routerStore")(SignUpPage)