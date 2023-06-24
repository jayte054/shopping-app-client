// import { SignUpPage } from "../../pages/signup-page/signupPage.pages"
import { Link, Outlet } from "react-router-dom"
import "./navbar.landingpage.css"
import {SlNote} from "react-icons/sl"
const NavBar = () => {
 
    return (
        <div className="navbar-containers">
        <h1 className="navbar-title"> 
        <Link style={{color: "black"}} to = "/">
        <SlNote />
        Shopping Manager
        </Link>
        </h1>
        <div className="navbar-auth"> 
        <Link className="signin-link" to = "/signin" > Sign In </Link>
        <Link className="signup-link" to ="/signup" > Sign Up </Link>
        </div>
        </div>
    )
}

export default NavBar