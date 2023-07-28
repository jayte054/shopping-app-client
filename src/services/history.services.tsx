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
        // const response = await axios.get(url, {item, price}, config)
      const response = await axios.post(`${BASE_URL}/shopper/createlist`, listInput, config);
        console.log(accessToken)
      console.log("Here : ", response.data)
      //console.log(response.data)
    //   return response.data;
    } catch (error) {
        console.log(error)
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