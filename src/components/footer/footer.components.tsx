import {BsInstagram} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {GiLion} from "react-icons/gi"
import "./footer-components.css"
import { Link, useNavigate } from "react-router-dom"
import toastify from "toastify-js"
import { useState } from "react"
import { directoryMailInput } from "../../services/directoryServices"
import { directoryStore } from "../../stores/directory.stores"

export const Footer = () => {
    const [username, setUsername] = useState("")
    const navigate = useNavigate()

    const directory = () => {
        navigate("/auth/directory")
    }

    const adminDirectory = () => {
        navigate("/auth/createEntry")
    }

    const handleSendMail = (e: React.FormEvent) => {
        e.preventDefault()
        return sendMail(e)
    }

    const sendMail =  async (e: React.FormEvent) => {
        e.preventDefault()
        const input: directoryMailInput = {username}
       const accessToken: any = localStorage.getItem("accessToken")

       const {directoryMail_Store} = directoryStore
    try{
       const response:any =  await directoryMail_Store(input, accessToken )
        toastify({
            text: "directory request mail sent successfully!",
            duration: 3000,
            gravity: "top", 
            backgroundColor: "green",
            close: true,
        }).showToast()
        setUsername(username)
    }catch(error){
        console.log(error)
        toastify({
            text: "directory request mail sent unsuccessfully!",
            duration: 3000,
            gravity: "top", 
            backgroundColor: "red",
            close: true,
        }).showToast()
    }
   
    }


    return (
        <div>
        <div className="container">
            <div>
                {/* <div>
                <span onClick={() => {console.log("here"); navigate("/auth/directory")}} 
                      className="linkdirectory"
                      >
                            Shopping Manager Directory
                </span>
                </div> */}
            <span className="footer-title"> please follow and engage us with your feedbacks on any of the platforms below </span>
            
           <div className="socials">
           <p><a  className="link"href="https://www.instagram.com/shoppingmanager317/" target="blank"> <BsInstagram /> @shoppingmanager317 </a></p>
            <p><a className="link" href="https://twitter.com/Shoppingapp317" target="blank"> <BsTwitter /> @shoppingapp317 </a></p>
            <p><a className="link" href="#"> <BsFacebook /> @shoppingapp </a></p>
           </div>
           <div>
                <span onClick={directory} 
                      className="linkdirectory"
                      >
                            Shopping Manager Directory
                </span> <br />
                <span onClick={adminDirectory}
                        className="linkdirectory">
                    Admin Directory    
            </span>
                </div>
           <div className="footer-end">
           <p> for entry into the directory page, please contact us at</p>
            <span>Email</span> <br />
            <input style={{width: "30%"}} 
                   type="email" 
                   placeholder="email address" 
                   value = {username}
                   onChange={(e) => setUsername(e.target.value)}
                   required /> <br />
            <button type="button"
                   onClick={(e) => handleSendMail(e)}
                    >
                        Submit
                    </button>
            <p>  contact us @  
                <a className="link" href="#" style={{marginLeft: ".5rem"}}> 
                 shoppingmanager317@gmail.com 
                </a>
            </p>
           </div>
          
            </div>
          
           <div className="developer-column">
            <p>Developed by J.T</p>
            <GiLion className="lion-icon"/>
                      
            <p>Contact @ <a className="link" href="#"> donoscar054@yahoo.com </a></p>
           
           </div>
        </div>
        </div>
    )
}