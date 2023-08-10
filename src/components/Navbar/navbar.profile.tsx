import { Link, Outlet } from "react-router-dom"
import "./navbar.profile.css"
import {SlNote} from "react-icons/sl"
import Signout from "../signout"
import { useEffect, useState } from "react"
import { inject, observer } from "mobx-react"
import toastify from "toastify-js"
import "toastify-js/src/toastify.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { BurgerMenu } from "../modal/burgerMenu/burgerMenu.profile"

const NavBar = ({userStore}: any) => {
    const [showModal, setShowModal] = useState(true)
    const [displayBurgerMenu, setDisplayBurgerMenu] = useState(false)
    const [showIcon, setShowIcon] = useState(true)
    const {SignOut} = userStore

    const openModal = () => {
        setShowModal(!showModal)
    }

    const displayBurger = () => {
        setDisplayBurgerMenu((pre) => !pre)
        setShowIcon(false)
    }

    const toggleVisibility = () => {
        setShowIcon(!showIcon)
    }

    const Signout = async(e: any) => {
        e.preventDefault()
        console.log("hit")
        await SignOut()
        document.location.href="/"
        toastify({
            text:"signout successful",
            duration:3000,
            gravity:"top",
            backgroundColor: "green",
            close: true
        }).showToast()
    }
 
    return (
        <div className="navbar-profile-container">
            <div>
        <h1 className="navbar-title"> 
        <Link style={{color: "black"}} to = "/auth/homepage">
        <SlNote />
        Shopping Manager
        </Link>
        </h1>
        </div>
        <div  className="burger-div">
            {showIcon && <GiHamburgerMenu className="burger-icons"
                            onClick={displayBurger}
            />}
            {displayBurgerMenu && (
            <BurgerMenu
                showIcon={showIcon}
                toggleVisibility={toggleVisibility}
                displayBurgerMenu={displayBurgerMenu}
                setDisplayBurgerMenu={setDisplayBurgerMenu} />
            )}
        </div>
        {/* <div className="navbar-auth"> 
        <Link id="shoppingHistory-link" style={{display: "left"}} className="navbar-auth" 
              to="/auth/shoppinghistory">
                Shopping History
        </Link>
        <span style = {{color:"purple", cursor: "pointer"}} 
              className="navbar-auth" 
              onClick={(e) => Signout(e)}> 
              Signout 
              </span>
      
        </div> */}
        </div>
    )
}

export default inject("userStore", "routerStore")(NavBar)