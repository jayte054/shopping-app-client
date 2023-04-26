import { Link, Outlet } from "react-router-dom"
import "./navbar.css"
import {SlNote} from "react-icons/sl"
const NavBar = () => {
 
    return (
        <div className="navbar-container">
        <h1 className="navbar-title"> 
        <Link style={{color: "black"}} to = "/homepage">
        <SlNote />
        Shopping Manager
        </Link>
        </h1>
        <div className="navbar-auth"> 
        <Link className="navbar-auth" to = "/profile" > Profile </Link>
        </div>
        </div>
    )
}

export default NavBar