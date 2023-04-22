import React from "react"
import { Link } from "react-router-dom"
import "./signinPage.pages.css"
import NavBarSignIn from "../../components/Navbar/navbar.signin"
import { Footer } from "../../components/footer/footer.components"

export const SignInPage =() => {
    const handleSubmit = () => {}
    return (
        <React.Fragment>
            <div className = "signin-container">
            <NavBarSignIn />
            <h2>please sign in with your details below</h2>
            <form onSubmit={handleSubmit}>
            <p className="signin-detail">Email Address</p>
            <input className = "signin-input" type="email" placeholder="email address" required/>
            <p className="signin-detail">Password</p>
            <input className="signin-input" type="password" placeholder="password" required/>
            <p> If you don't have an account, please <Link to="/signup"> sign up </Link>  </p>
            <button type= "submit"> Sign In </button>
            </form>
        </div>
        <Footer />
        </React.Fragment>
        
    )
}