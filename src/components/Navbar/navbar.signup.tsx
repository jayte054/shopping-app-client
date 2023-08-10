// import { SignUpPage } from "../../pages/signup-page/signupPage.pages"
import { Link, Outlet } from "react-router-dom"
import "./navbar.signup.css"
import {SlNote} from "react-icons/sl"
const NavBarSignUp = () => {
 
    return (
        <div className="navbar-signup-container">
        <h1 className="navbar-signup-titles">
        <Link style={{color: "black"}} to = "/">
        <SlNote />
        Shopping Manager
        </Link>
        </h1>
        <div className="navbar-auths"> 
        <Link className="navbar-auths" to ="/signin"> Sign In </Link>
        </div>
        </div>
    )
}

export default NavBarSignUp