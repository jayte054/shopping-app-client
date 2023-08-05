import axios from "axios"
import { BASE_URL } from "./auth.service"
import { userStore } from "../stores/user.stores";

 export interface profileInput {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: string
}

export const CreateProfile = async(profileInput: profileInput, accessToken: any) => {
  
    try{
        const response = await axios.post(`${BASE_URL}/profile/createprofile`, profileInput, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        return response.data
    }catch(error){
        throw error
    }
    
}



export const GetProfile = async(id: any, accessToken:any):Promise<any> => {
    console.log(localStorage.getItem("accessToken"))
    //  profileId = localStorage.getItem("id")
    const url = `http://localhost:3002/profile/${id}`;
     accessToken = localStorage.getItem("accessToken");
    
    const config = {
      headers: { 
        'Authorization': `Bearer ${accessToken}`
      }
    };
    
    try {
      const response = await axios.get(url, config);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
