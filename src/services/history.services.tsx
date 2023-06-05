import axios from "axios"
import { BASE_URL } from "./auth.service"
import queryString from "query-string"
// const queryString = require("query-string")

// export const createList = async ({item, price}: any): Promise<any> => {
//     const options = getCommonOptions() 
//     const result = await axios.post(`${BASE_URL}/shopper/create-list`, {item, price}, options)
//     console.log(result) 
//     const accessToken = result.data.accessToken;
//     saveToken(accessToken);
//     return window.alert("Shopping Itenary created successfully")
// }

export interface listInput {
    item: string;
    price: string;
}

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


export const createList = async (item:string, price: string): Promise<any> => {
    try {
      const response = await axios.post(`${BASE_URL}/shopper/create-list`,{item, price} 
      // {
    //     data: JSON.stringify({item, price}),
    //     headers: {
    //       Authorization: `Bearer ${accessToken}`
    //     }
    //   }
    );

    //   console.log("shorpingList:",shoppingList,"token:",accessToken)
      console.log(response)
      console.log(response.data)
      return response.data;
    } catch (error) {
        console.log(error)
      throw error;
    }
  };



export const fetchLists = async() => {
    const queryObj = {}
    const options = getCommonOptions()
    const queryStr = queryString.stringify(queryObj)

    try{
        const response = await axios.get(`${BASE_URL}/shopper/items`, options)
        const data = await response.data
        return  data
    }catch(error: any){
        const {statusCode} = error.response.data
        if(statusCode !== 401){
            throw error
        }
        return 401
    }
   
}

let accessToken = null

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
    accessToken = token
    return token
}
 
export const saveToken = (accessToken: string) => {
    localStorage.setItem("accessToken", accessToken);
  };