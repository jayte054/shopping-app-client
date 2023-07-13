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

    const displayBurger = () => {
        setDisplayBurgerMenu((pre) => !pre)
        setShowIcon(false)
    }
 
    return (
        <div  className="navbar-containers">
        <h1 className="navbar-title"> 
        <Link style={{color: "black"}} to = "/auth/homepage">
        <SlNote />
        Shopping Manager
        </Link>
        </h1>
        </div>
    )
}

export default inject("userStore", "routerStore")(NavBar)