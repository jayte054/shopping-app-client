import React, {useState} from "react"
import { Link } from "react-router-dom"
import { historyStore } from "../../../stores/history.stores"
import { userStore } from "../../../stores/user.stores"
import toastify from "toastify-js"
import "./burgerMenu.homepage.css"



export const BurgerMenu = (props: {displayBurgerMenu: any, 
                                   setDisplayBurgerMenu: any,
                                    showIcon: any,
                                    toggleVisibility:any}) => {
    const {SignOut} = userStore
    const {setDisplayBurgerMenu, showIcon, toggleVisibility} = props
    const closeMenu = () => {
        setDisplayBurgerMenu((pre:any) => !pre)
        toggleVisibility()
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
    return(
        <div className="burgerMenu-container">
            <div className="closeMenu">
             <span onClick={closeMenu} 
                  >
                    X
            </span>
            </div>
        <div className="link-container">
        <Link className="link" 
              to="/auth/shoppinghistory">
                Shopping History
        </Link>
        <hr style={{marginRight: "1rem"}}/>
        <Link className="link"
              to = "/auth/profile" >
                 Profile 
        </Link>
        <hr style={{marginRight: "1rem"}}/>
        <span className="modalSignout-link"
              onClick={(e) => Signout(e)}> 
              Signout 
        </span>
        </div>    
        
        </div>
    )
}