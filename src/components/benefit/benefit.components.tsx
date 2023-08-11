import {MdDynamicFeed} from "react-icons/md"
import "./benefit.component.css"
import { Link } from "react-router-dom"

export const Benefit = () => {
    return (
        <div className="benefit-container">
           <div className="dynamic-icon-container"> 
           <MdDynamicFeed className="dynamic-icon"/> 
           </div>
            <div>
            <h2> Benefits of having an account with us </h2>
            <ul className="list-container"> 
                <li> Unlimited number of items to be collated </li>
                <li> Real time options on how you want to use your list of collated items </li>
                <li> Ability to communicate with retailers who have an online presence</li>
                <li> Regular news updates on our upgrades </li>
                <li> Real time location of stores close to you </li>

            </ul>
            <p>Why don't you <Link to="/signup"> sign up </Link></p>
            </div>
        </div>
    )
}