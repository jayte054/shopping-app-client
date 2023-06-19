import { Link, Outlet, useNavigate } from "react-router-dom"
import "./navbar.css"
import {SlNote} from "react-icons/sl"
import Signout from "../signout"
import { useEffect, useState } from "react"
import { inject, observer } from "mobx-react"
import toastify from "toastify-js"
import "toastify-js/src/toastify.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { BurgerMenu } from "../modal/burgerMenu/burgerMenu.homepage"


const NavBar = ({userStore}: any) => {
    const [showModal, setShowModal] = useState(true)
    const [displayBurgerMenu, setDisplayBurgerMenu] = useState(false)
    const [showIcon, setShowIcon] = useState(true)
    const navigate = useNavigate()
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
        <div  className="navbar-containers">
        <h1 className="navbar-title"> 
        <Link style={{color: "black"}} to = "/auth/homepage">
        <SlNote />
        Shopping Manager
        </Link>
        </h1>
        <div  className="burger-div">
            {showIcon && <GiHamburgerMenu className="burger-icon"
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
        <Link id="profile-link" style={{paddingLeft:"2.5rem"}}className="navbar-auth" 
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
      
        </div> */}
        </div>
    )
}

export default inject("userStore", "routerStore")(NavBar)