import { Link, Outlet } from "react-router-dom"
import "./navbar.css"
import {SlNote} from "react-icons/sl"
import Signout from "../signout"
import { useEffect, useState } from "react"
import { inject, observer } from "mobx-react"

const NavBar = ({userStore}: any) => {

    const {SignOut} = userStore

    const Signout = async(e: any) => {
        e.preventDefault()
        console.log("hit")
        await SignOut()
        document.location.href="/"
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
        <Link className="navbar-auth" to = "/auth/profile" > Profile </Link>
        <span className="navbar-auth" onClick={(e) => Signout(e)}> Signout </span>
      
        </div>
        </div>
    )
}

export default inject("userStore", "routerStore")(NavBar)