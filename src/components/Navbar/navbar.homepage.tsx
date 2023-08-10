import { Link, Outlet, useNavigate } from "react-router-dom"
import "./navbar.homepage.css"
import {SlNote} from "react-icons/sl"
import { useState } from "react"
import { inject, observer } from "mobx-react"
import "toastify-js/src/toastify.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { BurgerMenu } from "../modal/burgerMenu/burgerMenu.homepage"


const NavBar = ({userStore}: any) => {
    const [showModal, setShowModal] = useState(true)
    const [displayBurgerMenu, setDisplayBurgerMenu] = useState(false)
    const [showIcon, setShowIcon] = useState(true)
    const navigate = useNavigate()
    const {SignOut} = userStore

  

    const displayBurger = () => {
        setDisplayBurgerMenu((pre) => !pre)
        setShowIcon(false)
    }

    const toggleVisibility = () => {
        setShowIcon(!showIcon)
    }

 
    return (
        <div  className="navbar-homepage-containers">
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