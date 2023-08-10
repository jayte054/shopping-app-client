import axios from "axios";
import { BASE_URL } from "./auth.service"

export interface directoryInput {
    name: string,
    number: string,
    walletId: string,
    address: string,
    latitude: string,
    longitude: string
}

export interface directoryMailInput {
    username: string;
}

export const fetchDirectory = async(accessToken: string): Promise<any> => {
    const url =`${BASE_URL}/directory/getentry`;
    const config = {
        headers: {
            "authorization": `Bearer ${accessToken}`
        }
    }

    try{
        const response = await axios.get(url, config)
        return JSON.stringify(response.data)
    }catch(error){
        throw error
    }

}

export const createDirectoryEntry = async(directoryInput: directoryInput, accessToken: any): Promise<any> => {
    try{
        const response = await axios.post(`${BASE_URL}/directory/createentry`, directoryInput, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        return response.data
    }catch(error){
        throw error 
    }
}

export const registerOnDirectoryMail = async(directoryMailInput: directoryMailInput, accessToken: string): Promise<string> => {
    try{
        const response = await axios.post(`${BASE_URL}/auth/directorymail`, directoryMailInput, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })

        return response.data
    }catch(error){
        throw new Error("directory email registeration failed")
    }
}