// import { SignUpPage } from "../../pages/signup-page/signupPage.pages"
import { Link, Outlet } from "react-router-dom"
import "./navbar.css"
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
        <Link className="navbar-auth" to = "/signin" > Sign In </Link>
        <Link className="navbar-auth" to ="/signup" > Sign Up </Link>
        </div>
        </div>
    )
}

export default NavBar