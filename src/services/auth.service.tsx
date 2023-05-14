// import  axios, {AxiosResponse}  from "axios"
// import BaseHttpService from "./base-http.service";

// export default class AuthService extends BaseHttpService {
//     async signin(username:string, password: string): Promise<string> {
//         const result: AxiosResponse = await axios.post(`${this.BASE_URL}/auth/signin`, {username, password})
//         const accessToken = result.data.accessToken;
//         this.saveToken(accessToken)
//         return result.data.username
//     }

//     async signup(username: string, password: string): Promise<string> {
//         return (
//         await axios.post(`${this.BASE_URL}/auth/signup`, {username, password})
//         )
//     }

//     async signout() {
//         this.removeToken()
//     }
// }

import axios from "axios";

export const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3002"

export const signinService = async ({username, password}:any): Promise<any> => {
  console.log(username, password)
  const result = await axios.post(`${BASE_URL}/auth/signin`, { username, password });
  const accessToken = result.data.accessToken;
  saveToken(accessToken);
  console.log(result)
  return result.data.username;
};

export const signupService = async (username: string, password: string): Promise<string> => {
  const result = await axios.post(`${BASE_URL}/auth/signup`, { username, password });
  console.log(result)
  return result.data.username;
};

export const signoutService = () => {
 return removeToken();
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