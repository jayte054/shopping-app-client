import NavBar from "../../components/Navbar/navbar.homepage"
import "./profile.pages.css"
import { Footer } from "../../components/footer/footer.components"
import { profileStore } from "../../stores/profileStore"
import { profileInput } from "../../services/profileService"
import { useState } from "react"
import {inject} from "mobx-react"


 const Profile = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken") || "")

    const handleSubmit = async(e:any) => {
        
        e.preventDefault()
        const input: profileInput = {
            firstName,
            lastName,
            phoneNumber,
            address
        }
        
        const {createProfile} = profileStore
        try{
            await createProfile(input, accessToken)
            window.alert("profile saved successfully")
        }catch(error: any){
            console.log(error)
            throw error
        }
    }

    return (
        <div>
            <NavBar />
            <div className="profile-container">
            <h2>My Profile</h2>
            <p>Please update your profile</p>
            <div className="profile-input-container">
            <p>First Name :</p>
            <input type="text" 
                   placeholder = "first name" 
                   className="profileInput"
                   value={firstName}
                   onChange={e => setFirstName(e.target.value)}/>
            <p>Last Name :</p>
            <input type="text" 
                   placeholder="last name" 
                   className="profileInput"
                   value={lastName}
                   onChange={e => setLastName(e.target.value)}/>
            <p>Phone Number :</p>
            <input type="number" 
                   placeholder="mobile number" 
                   className="profileInput"
                   value={phoneNumber}
                   onChange={e => setPhoneNumber(e.target.value)}/><br/>
            <p>Address</p>
            <input type="string" 
                   placeholder="address" 
                   className="profileInput"
                   value = {address}
                   onChange={e => setAddress(e.target.value)}/><br/>
            <button type="submit" 
                    style={{marginTop:"1rem"}} 
                    onClick={(e) => handleSubmit(e)}>
                        Submit
            </button>
            </div>
         
            </div>
          
            <Footer />
        </div>
    )
}

export default inject("profileStore", "routerStore")(Profile)