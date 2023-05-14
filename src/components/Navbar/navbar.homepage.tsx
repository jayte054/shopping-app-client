import { Link, Outlet } from "react-router-dom"
import "./navbar.css"
import {SlNote} from "react-icons/sl"
import Signout from "../signout"
import { useState } from "react"
import { inject, observer } from "mobx-react"
import { userStore } from "../../stores/user.stores"
const NavBar = () => {
    // const Signout = async({userStore}: any) => {
    //     // const [errorMessage, setErrorMessage] = useState(null)
    //     const {SignOut} = userStore
    
    //     try{
    //         await SignOut()
    //         document.location.href = "/"
    //     }catch(error: any){
    //     //    const errorMessage = error.response.data.message
    //     //     setErrorMessage(errorMessage)
    //     throw error
    //     }
        
    // }

//     const handleClick = async(e: any) => {
//         e.preventDefault()
//         console.log("hit")
//         try{
//             <Signout />
//         }catch(error){
//             console.log(error)
//             throw error
//         }
// }

    const handleClick = async(e: any) => {
        e.preventDefault()
        console.log("hit")
        await userStore.SignOut()
    }
 
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
        <span className="navbar-auth" onClick={ async(e) => {
            e.preventDefault()
            console.log("hit")
            await userStore.SignOut()
        } } > Signout </span>
        </div>
        </div>
    )
}

export default inject("userStore", "routerStore") (NavBar)