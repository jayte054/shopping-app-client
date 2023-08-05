import { CreateProfile, GetProfile, profileInput } from "../services/profileService"

const createProfile = async(profileInput: profileInput, accessToken: any ) => {
    try{
        await CreateProfile(profileInput, accessToken)
    }catch(error: any) {
        console.log(error)
        throw error
    }
}

const getProfile = async(profileId: any, accessToken: any): Promise<any> => {
    try{
      const profileData =  await GetProfile(profileId, accessToken)
      return profileData
    }catch(error: any){
        throw error
    }
}

export const profileStore = {
    createProfile,
    getProfile
}