// import { SignUpPage } from "../../pages/signup-page/signupPage.pages"
import { Link, Outlet } from "react-router-dom"
import "./navbar.signin.css"
import {SlNote} from "react-icons/sl"
const NavBarSignIn = () => {
 
    return (
        <div className="navbar-container">
        <h1 className="navbar-titles">
        <Link style={{color:"black"}} to = "/">
        <SlNote />
        Shopping Manager
        </Link>
        </h1>
        <div className="navbar-auths"> 
        <Link className="navbar-auth" to ="/signup"> Sign Up </Link>
        </div>
        </div>
    )
}

export default NavBarSignIn