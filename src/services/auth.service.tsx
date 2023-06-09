

import axios from "axios";

export const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3002"

export const signinService = async ({username, password}:any): Promise<any> => {
  console.log(username, password)
  const result = await axios.post(`${BASE_URL}/auth/signin`, { username, password });
  const accessToken = result.data.accessToken;
  saveToken(accessToken);
  console.log(result.data.user.id)
  const profileId = result.data.user.id
  const userData = {user: result.data.user, profileId, accessToken};
  console.log(userData)
  return userData
};



export const signupService = async (username: string, password: string): Promise<string> => {
  const result = await axios.post(`${BASE_URL}/auth/signup`, { username, password });
  console.log(result)
  return result.data.username;
};

export const signoutService = () => {
 return removeToken();
};

// export const signinServiceId = async ({username, password}:any): Promise<any> => {
//   console.log(username, password)
//   const result = await axios.post(`${BASE_URL}/auth/signin`, { username, password });
//   const accessToken = result.data.accessToken;
//   saveToken(accessToken);
//   console.log(result.data.username.user.id)
//   return result.data.username.user.id;
// };

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

// export default authService