import axios from "axios"
import { BASE_URL } from "./auth.service"



export class ListInput {
    item?: string;
    price?: string ;
}

export const CreateList = async (listInput:ListInput, accessToken:any ): Promise<any> => {
    //const url = `${BASE_URL}/shopper/createlist`
     accessToken = localStorage.getItem("accessToken")
    const config = {
        headers: {
            "authorization":`Bearer ${accessToken}`
        }
    }
    try {
       await axios.post(`${BASE_URL}/shopper/createlist`, listInput, config);
     
    } catch (error) {
        
      throw error;
    }
  };



  export const fetchShoppingLists = async ( accessToken: string): Promise<any> => {
    const url = `${BASE_URL}/shopper/items/`;
    const config = {
      headers: {
        "authorization": `Bearer ${accessToken}`
      }
    };
    try {
      const response = await axios.get(url, config);
      return JSON.stringify(response.data);
    } catch (error) {
      throw error;
    }
  };


const getCommonOptions = () => {
    const token = loadToken()
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
}

 export const loadToken = async() => {
    const token = await localStorage.getItem("accessToken")
    return token
}
 
export const saveToken = (accessToken: string) => {
    localStorage.setItem("accessToken", accessToken);
  };