import { Link, Outlet, useNavigate } from "react-router-dom"
import "./navbar.css"
import {SlNote} from "react-icons/sl"
import Signout from "../signout"
import { useEffect, useState } from "react"
import { inject, observer } from "mobx-react"
import toastify from "toastify-js"
import "toastify-js/src/toastify.css"


const NavBar = ({userStore}: any) => {
    const navigate = useNavigate()
    const {SignOut} = userStore

    const Signout = async(e: any) => {
        e.preventDefault()
        console.log("hit")
        await SignOut()
        toastify({
            text:"signout successful",
            duration:3000,
            gravity:"top",
            backgroundColor: "green",
            close: true
        }).showToast()
        navigate("/")
    }
 
    return (
        <div className="navbar-container">
        <h1 className="navbar-title"> 
        <Link style={{color: "black"}} to = "/auth/homepage">
        <SlNote />
        Shopping Manager
        </Link>
        </h1>
        <div className="navbar-auth"> 
        <Link className="navbar-auth" 
              to = "/auth/profile" > 
              Profile 
        </Link>
        <Link className="navbar-auth" 
              to="/auth/shoppinghistory">
                Shopping History
        </Link>
        <span style = {{color:"purple", cursor: "pointer"}} 
              className="navbar-auth" 
              onClick={(e) => Signout(e)}> 
              Signout 
              </span>
      
        </div>
        </div>
    )
}

export default inject("userStore", "routerStore")(NavBar)