import NavBar from "../../components/Navbar/navbar.homepage"
import "./profile.pages.css"
import { Footer } from "../../components/footer/footer.components"

export const Profile = () => {
    return (
        <div>
            <NavBar />
            <div className="profile-container">
            <h2>My Profile</h2>
            <p>Please update your profile</p>
            <div className="profile-input-container">
            <p>First Name :</p>
            <input type="text" placeholder = "first name" className="profileInput"/>
            <p>Last Name :</p>
            <input type="text" placeholder="last name" className="profileInput"/>
            <p>Phone Number :</p>
            <input type="number" placeholder="mobile number" className="profileInput"/><br/>
            <button type="submit" style={{marginTop:"1rem"}}>Submit</button>
            </div>
         
            </div>
          
            <Footer />
        </div>
    )
}