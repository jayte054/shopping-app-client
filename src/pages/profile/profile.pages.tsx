import { useEffect, useState, useContext, useMemo, MouseEventHandler } from "react"
import {inject} from "mobx-react"
import { v4 as uuidv4 } from 'uuid'
import toastify from 'toastify-js';
import 'toastify-js/src/toastify.css'
import NavBar from "../../components/Navbar/navbar.profile"
import "./profile.pages.css"
import { Footer } from "../../components/footer/footer.components"
import { profileStore } from "../../stores/profileStore"
import { profileInput } from "../../services/profileService"
import { signinService } from "../../services/auth.service"
import { AuthContext } from "../../context/authContext/authContext"


 const Profile = () => {
    const {user, updateUser} = useContext(AuthContext)
    console.log(user.profileId)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken") || "")
    
    
   
    const getProfile = async (profileId: string, accessToken: any): Promise<void> => {
        console.log("get")
      profileId  = user.profileId 
      console.log(profileId)
      accessToken = localStorage.getItem("accessToken")
        console.log(localStorage.getItem("accessToken"))
        const { getProfile } = profileStore;
        try {
          const profileData = await getProfile(profileId, accessToken);
          setFirstName(profileData.firstName);
          setLastName(profileData.lastName);
          setPhoneNumber(profileData.phoneNumber);
          setAddress(profileData.address);
          console.log(profileData.firstName, profileData.lastName, profileData.phoneNumber, profileData.address)
          
          toastify({
            text: "profile data retrieved successfully!",
            duration: 3000,
            gravity: "top", 
            backgroundColor: "green",
            close: true,
          }).showToast();
         
        } catch (error: any) {
          if (error.response && error.response.status === 404) {
           
            toastify({
              text:"profile data not found",
              duration: 3000,
              gravity: "top",
              backgroundColor: "red",
              close: true
            }).showToast()
            console.log('Profile not found');
          
          } else {
            toastify({
              text:"profile data not found",
              duration: 3000,
              gravity: "top",
              backgroundColor: "red",
              close: true
            }).showToast()
            console.log(error);
            throw error;
          }
        }
      }; 

      const handleViewProfile: MouseEventHandler<HTMLButtonElement> = (profileId: any) => {
        const accessToken = localStorage.getItem("accessToken");
        getProfile(profileId, accessToken);
      }; 
    

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
            toastify({
              text:"profile successfully updated",
              duration:3000,
              gravity:"top",
              backgroundColor: "green",
              close: true
          }).showToast()
            
        }catch(error: any){
            console.log(error)
            toastify({
              text:"profile update unsuccessful",
              duration:3000,
              gravity:"top",
              backgroundColor: "red",
              close: true
          }).showToast()
            throw error
        }
    }

    const contextValue = useMemo(() => ({ user, updateUser }), [user]);

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
                    style={{marginTop:"1rem", width:"7rem", height: "2rem"}} 
                    onClick={(e) => handleSubmit(e)}>
                        Submit
            </button>
            <button type="button" 
                    style={{marginLeft:"1rem", width:"7rem", height:"2rem"}}
                    onClick={handleViewProfile}>View Profile</button> 

             </div>

            </div> 
          
            <Footer />
        </div>
    )
}

export default inject("profileStore", "routerStore")(Profile)