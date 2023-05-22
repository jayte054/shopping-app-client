import axios from "axios"
import { BASE_URL } from "./auth.service"

 export interface profileInput {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: string
}

export const CreateProfile = async(profileInput: profileInput, accessToken: any) => {
    // const token = localStorage.getItem("accessToken")
    // accessToken = token
    try{
        const response = await axios.post(`${BASE_URL}/profile/createprofile`, profileInput, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        return response.data
    }catch(error){
        console.log(error)
        throw error
    }
    
}