import {BsInstagram} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {GiLion} from "react-icons/gi"
import "./footer-components.css"
import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <div>
        <div className="container">
            <div>
                <div>
                <Link style={{ marginLeft: "1rem"}} 
                      to="/auth/directory" 
                      className="link"
                      >
                            Shopping Manager Directory
                </Link>
                </div>
            <span className="footer-title"> please follow and engage us with your feedbacks on any of the platforms below </span>
           <div className="socials">
           <p><a  className="link"href="https://www.instagram.com/shoppingmanager317/" target="blank"> <BsInstagram /> @shoppingmanager317 </a></p>
            <p><a className="link" href="https://twitter.com/Shoppingapp317" target="blank"> <BsTwitter /> @shoppingapp317 </a></p>
            <p><a className="link" href="#"> <BsFacebook /> @shoppingapp </a></p>
           </div>
           <div className="footer-end">
           <p> You could also sign up for our news letters</p>
            <span>Email</span> <br />
            <input type="email" placeholder="email address" required /> <br />
            <button>Submit</button>
            <p>contact us @ <a className="link" href="#"> shoppingmanager317@gmail.com </a></p>
           </div>
            <span style={{marginLeft: "2rem"}}>
                  <Link  to="/auth/createEntry" className="link"> 
                    Admin Directory
                  </Link>
            </span>
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