import { fetchDirectory, directoryInput, createDirectoryEntry } from "../services/directoryServices"

 const FetchDirectory_Store = async(accessToken: any): Promise<any> => {
    try{
        const response = await fetchDirectory(accessToken)
        return response 
    }catch(error){
        throw error;
    }
}

 const createDirectory_Store= async(directoryInput: directoryInput, accessToken: any): Promise<any> => {
    try{
        await createDirectoryEntry(directoryInput, accessToken)
    }catch(error){
        throw error
    }
}

export const directoryStore = {
    FetchDirectory_Store,
    createDirectory_Store
}