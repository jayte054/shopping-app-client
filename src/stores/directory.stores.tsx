import { fetchDirectory, directoryInput, createDirectoryEntry, directoryMailInput, registerOnDirectoryMail } from "../services/directoryServices"

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

    const directoryMail_Store = async(directoryMailInput: directoryMailInput, accessToken: string): Promise<string> => {
        const {username} = directoryMailInput
        try{
            await registerOnDirectoryMail(directoryMailInput, accessToken)
            return "mail sent successfully"
        }catch(error){
            throw new Error(`${username} directory mail unsuccessful`)
        }
    }

export const directoryStore = {
    FetchDirectory_Store,
    createDirectory_Store,
    directoryMail_Store
}