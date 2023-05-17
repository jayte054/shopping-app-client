import axios from "axios"
import { BASE_URL } from "./auth.service"
import queryString from "query-string"
// const queryString = require("query-string")

export const createList = async ({item, price}: any): Promise<any> => {
    const result = await axios.post(`${BASE_URL}/shopper/create-list`, {item, price})
    console.log(result)
    return window.alert("Shopping Itenary created successfully")
}

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

const loadToken = async() => {
    const token = await localStorage.getItem("accessToken")
    accessToken = token
    return token
}