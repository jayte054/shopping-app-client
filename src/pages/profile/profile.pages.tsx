
import NavBar from "../../components/Navbar/navbar.homepage"
import "./profile.pages.css"
import { Footer } from "../../components/footer/footer.components"
import { profileStore } from "../../stores/profileStore"
import { profileInput } from "../../services/profileService"
import { useEffect, useState, useContext, useMemo, MouseEventHandler } from "react"
import {inject} from "mobx-react"
import { v4 as uuidv4 } from 'uuid'
import { signinService } from "../../services/auth.service"
import { AuthContext } from "../../context/authContext/authContext"


 const Profile = () => {
    const {user, updateUser} = useContext(AuthContext)
    const {updateProfile} = useContext(AuthContext)
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
        // e.preventDefault();
        const { getProfile } = profileStore;
        try {
          const profileData = await getProfile(profileId, accessToken);
          // const {firstname, lastname, phoneNumber, address} = profileData.data
          setFirstName(profileData.firstName);
          setLastName(profileData.lastName);
          setPhoneNumber(profileData.phoneNumber);
          setAddress(profileData.address);
          console.log(profileData.firstName, profileData.lastName, profileData.phoneNumber, profileData.address)
          updateProfile(profileData)
        //   setIsLoading(false);
        } catch (error: any) {
          if (error.response && error.response.status === 404) {
            // Handle 404 error here
            console.log('Profile not found');
            // Display an error message or perform any necessary actions
          } else {
            console.log(error);
            throw error;
          }
        }
      }; 

      const handleViewProfile: MouseEventHandler<HTMLButtonElement> = (profileId: any) => {
        // event.preventDefault();
        const accessToken = localStorage.getItem("accessToken");
        getProfile(profileId, accessToken);
      };

    //   useEffect(() => {
    //     if (profileId) {
    //       getProfile(profileId);
    //     }
    //   }, [profileId]);
    
    
    
    

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
                    style={{marginTop:"1rem"}} 
                    onClick={(e) => handleSubmit(e)}>
                        Submit
            </button>
             </div>

            <button type="button" onClick={handleViewProfile}>View Profile</button> 
                {/* <p>first name: {firstName}</p> */}
         
            </div> 
          
            <Footer />
        </div>
    )
}

export default inject("profileStore", "routerStore")(Profile)