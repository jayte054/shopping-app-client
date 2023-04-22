import React from "react"
import { Link } from "react-router-dom"
import "./signupPage.pages.css"
import NavBarSignUp from "../../components/Navbar/navbar.signup"
import { Footer } from "../../components/footer/footer.components"

export const SignUpPage =() => {
    const handleSubmit = () => {}
    return (
        <React.Fragment>
            <div className = "signup-container">
            <NavBarSignUp />
            <h2>please provide your sign up details below</h2>
            <form onSubmit={handleSubmit}>
            <p className="signup-detail">Email Address</p>
            <input className = "signup-input" type="email" placeholder="email address" required/>
            <p className="signup-detail">Password</p>
            <input className="signup-input" type="password" placeholder="password" required/>
            <p> If you already have an account, please <Link to="/signin"> sign in </Link>  </p>
            <button type= "submit"> Sign Up </button>
            </form>
        </div>
        <Footer />
        </React.Fragment>
        
    )
}