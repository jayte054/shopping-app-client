

import axios from "axios";

export const BASE_URL = process.env.REACT_APP_BASE_URL || 
// "http://localhost:3002"
 "https://shopping-manager-backend.onrender.com"

export const signinService = async ({username, password}:any): Promise<any> => {
  const result = await axios.post(`${BASE_URL}/auth/signin`, { username, password });
  const accessToken = result.data.accessToken;
  saveToken(accessToken);
  const profileId = result.data.user.id
  const userData = {user: result.data.user, profileId, accessToken};
  return userData
};



export const signupService = async (username: string, password: string): Promise<string> => {
  const result = await axios.post(`${BASE_URL}/auth/signup`, { username, password });
  return result.data.username;
};

export const resetPaswordEmailService = async (username: string): Promise<string> => {
  const response = await axios.post(`${BASE_URL}/auth/resetEmail`, {username})
  return response.data
}

export const resetPasswordService = async ({newPassword, token}: any): Promise<string> => {
  const result = await axios.post(`${BASE_URL}/auth/resetPassword`, {newPassword, token})
  return result.data
}

export const signoutService = () => {
 return removeToken();
};



export const getAuthToken = async (): Promise<string> => {
  // Retrieve the authentication token from a secure location (e.g., local storage)
  const token = localStorage.getItem('accessToken');
  if (token) {
    return token;
  } else {
    // Handle the case when the authentication token is not available
    throw new Error('Authentication token not found');
  }
};

export const saveToken = (accessToken: string) => {
    localStorage.setItem("accessToken", accessToken);
  };
  
  export const loadToken = (): string | null => {
    return localStorage.getItem("accessToken");
  };
  
  export const removeToken: any = () => {
    localStorage.removeItem("accessToken");
  };
