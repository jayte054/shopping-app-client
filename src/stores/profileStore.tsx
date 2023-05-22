import { CreateProfile, profileInput } from "../services/profileService"

const createProfile = async(profileInput: profileInput, accessToken: any ) => {
    try{
        await CreateProfile(profileInput, accessToken)
    }catch(error: any) {
        console.log(error)
        throw error
    }
}

export const profileStore = {
    createProfile
}