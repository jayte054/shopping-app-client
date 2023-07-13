import axios from "axios"
import { BASE_URL } from "./auth.service"
import queryString from "query-string"
import { useContext } from "react";
import AuthContext from "../context/authContext/authContext";
// const queryString = require("query-string")



// export const createList = async ({item, price}: any): Promise<any> => {
//     const options = getCommonOptions() 
//     const result = await axios.post(`${BASE_URL}/shopper/create-list`, {item, price}, options)
//     console.log(result) 
//     const accessToken = result.data.accessToken;
//     saveToken(accessToken);
//     return window.alert("Shopping Itenary created successfully")
// }



// const axios = require('axios');
// const qs = require('qs');
// let data = qs.stringify({
//   'item': 'car',
//   'price': '10000',
//   'item': 'land',
//   'price': '320',
//   'item': 'ticket',
//   'price': '2500' 
// });

// let config = {
//   method: 'post',
//   maxBodyLength: Infinity,
//   url: 'localhost:3002/shopper/create-list',
//   headers: { 
//     'Content-Type': 'application/x-www-form-urlencoded', 
//     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFkbWludXNlckBnbWFpbC5jb20iLCJpYXQiOjE2ODQ5MzQzOTcsImV4cCI6MTY4NDkzNzk5N30.AB-rjuypkGj6xVKVZFSz-AOE-eCNwpgtibj-7aa_qYM'
//   },
//   data : data
// };

// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });

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