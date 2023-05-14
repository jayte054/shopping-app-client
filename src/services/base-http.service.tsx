import axios from "axios"

// import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios"
// import { RouterStore } from "mobx-react-router";
// // const axios = require("axios")

//    export const BaseHttpService = () => {
//    const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3002";
//    let _accessToken: string | null = null;
// //    const routerStore: RouterStore;

//     // constructor(routerStore: any) {
//     //     this.routerStore = routerStore;
//     // }
//     //  constructor (private routerStore:RouterStore) {
//     //     this.axiosInstance = axios.create()
//     //  }

//     const get = async (endpoint: any, options: AxiosRequestConfig = {}) => {
//         Object.assign(options, _getCommonOptions());
//         return axios.get(`${BASE_URL}/${endpoint}`, options)
//         .catch((error: any) => _handleHttpError(error))
//     }

//     const post = async (endpoint: any, data = {}, options: AxiosRequestConfig = {}) => {
//         Object.assign(options, _getCommonOptions())
//         return axios.post(`${BASE_URL}/${endpoint}`, data, options)
//         .catch((error:any) => _handleHttpError(error))
//     }

//     const del = async (endpoint: any, options={}) => {
//         Object.assign(options, _getCommonOptions())
//         return axios.delete(`${BASE_URL}/${endpoint}`, options)
//         .catch((error: any) => _handleHttpError(error))
//     }

//    const patch = async (endpoint: any, data = {}, options = {}) => {
//         Object.assign(options, _getCommonOptions())
//         return axios.delete(`${BASE_URL}/${endpoint}`, options)
//         .catch((error: any) => _handleHttpError(error))
//     }

//     function  _handleHttpError(error: any){
//         const {statusCode} = error.response.data

//         if(statusCode !== 401) {
//             throw error;
//         } else {
//             return _handle401()
//         }
//     }

//     function _handle401() {
//         window.location.hash = "/signin"
//     }

//     function _getCommonOptions() {
//         const token = loadToken()

//         return {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         }
//     }

//     const accessToken = _accessToken ? _accessToken : loadToken();
  
//          return {
//            get, 
//            delete: del,
//            post,
//            patch,
//            saveToken,
//            loadToken,
//            removeToken,     
//            accessToken,      
//          };

//     // function get accessToken(): string | null {
//     //     return _accessToken ? _accessToken : loadToken();
//     //   }

//     function saveToken(accessToken: any) {
//         _accessToken  = accessToken
//         return localStorage.setItem("accessToken", accessToken)
//     }

//     function loadToken() {
//         const token = localStorage.getItem("accessToken")
//         _accessToken = token
//         return token
//     }

//     function removeToken() {
//         localStorage.removeItem("accessToken")
//     }
// }
//  export default BaseHttpService

// import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
// import { AnyNsRecord } from "dns";
// import { RouterStore } from "mobx-react-router";
// import { useState } from "react";

// type BaseHttpServiceInstance = {
//     get: (endpoint: string, options?: AxiosRequestConfig) => Promise<AxiosResponse>;
//     post: (endpoint: string, data?: any, options?: AxiosRequestConfig) => Promise<AxiosResponse>;
//     delete: (endpoint: string, options?: AxiosRequestConfig) => Promise<AxiosResponse>;
//     patch: (endpoint: string, data?: any, options?: AxiosRequestConfig) => Promise<AxiosResponse>;
//     accessToken: string | null;
//     saveToken: (accessToken: string) => void;
//     loadToken: () => string | null;
//     removeToken: () => void;
//   };

//   const BaseHttpService = (routerStore: RouterStore): BaseHttpServiceInstance => {
//     const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3002";
//     let _accessToken: string | null = null;
  
//     const axiosInstance: AxiosInstance = axios.create({
//       baseURL: BASE_URL,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
  
//     const _handleHttpError = (error: any) => {
//       const { statusCode } = error.response.data;
  
//       if (statusCode !== 401) {
//         throw error;
//       } else {
//         return _handle401();
//       }
//     };
  
//     const _handle401 = () => {
//       routerStore.history.push("/signin");
//     };
  
//     const _getCommonOptions = () => {
//       const token = loadToken();
  
//       return {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
//     };
  
//     const get: any = async (endpoint: string, options: AxiosRequestConfig = {}) => {
//       Object.assign(options, _getCommonOptions());
//       return axiosInstance.get(endpoint, options).catch((error: any) => _handleHttpError(error));
//     };
  
//     const post: any = async (endpoint: string, data: any = {}, options: AxiosRequestConfig = {}) => {
//       Object.assign(options, _getCommonOptions());
//       return axiosInstance.post(endpoint, data, options).catch((error: any) => _handleHttpError(error));
//     };
  
//     const del: any = async (endpoint: string, options: AxiosRequestConfig = {}) => {
//       Object.assign(options, _getCommonOptions());
//       return axiosInstance.delete(endpoint, options).catch((error: any) => _handleHttpError(error));
//     };
  
//     const patch: any = async (endpoint: string, data: any = {}, options: AxiosRequestConfig = {}) => {
//       Object.assign(options, _getCommonOptions());
//       return axiosInstance.patch(endpoint, data, options).catch((error: any) => _handleHttpError(error));
//     };
  
//     const saveToken = (accessToken: string) => {
//       _accessToken = accessToken;
//       localStorage.setItem("accessToken", accessToken);
//     };
  
//     const loadToken = () => {
//       const token = localStorage.getItem("accessToken");
//       _accessToken = token;
//       return token;
//     };
  
//     const removeToken = () => {
//       localStorage.removeItem("accessToken");
//     };
  
//     const accessToken = _accessToken ? _accessToken : loadToken();
  
//     return {
//       get,
//       post,
//       delete: del,
//       patch,
//       accessToken,
//       saveToken,
//       loadToken,
//       removeToken,
//     };
//   };
  
//   export default BaseHttpService;

// const BaseHttpService = (routerStore: RouterStore) => {
//   const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3002";
//   const [accessToken, setAccessToken] = useState<string | null>(null);

//   const get = async (endpoint: any, options: AxiosRequestConfig = {}) => {
//     Object.assign(options, getCommonOptions());
//     return axios
//       .get(`${BASE_URL}/${endpoint}`, options)
//       .catch((error: any) => handleHttpError(error));
//   };

//   const post = async (endpoint: any, data = {}, options: AxiosRequestConfig = {}) => {
//     Object.assign(options, getCommonOptions());
//     return axios
//       .post(`${BASE_URL}/${endpoint}`, data, options)
//       .catch((error: any) => handleHttpError(error));
//   };

//   const removeToken = () => {
//     localStorage.removeItem("accessToken");
//   };

//   const handleHttpError = (error: any) => {
//     const { statusCode } = error.response.data;

//     if (statusCode !== 401) {
//       throw error;
//     } else {
//       handle401();
//     }
//   };

//   const handle401 = () => {
//     window.location.hash = "/signin";
//   };

//   const getCommonOptions = () => {
//     const token = loadToken();

//     return {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };
//   };

//   const loadToken = () => {
//     const token = localStorage.getItem("accessToken");
//     setAccessToken(token);
//     return token;
//   };

//   const saveToken = (accessToken: any) => {
//     setAccessToken(accessToken);
//     localStorage.setItem("accessToken", accessToken);
//   };

//   const deleteMethod = async (endpoint: any, options = {}) => {
//     Object.assign(options, getCommonOptions());
//     return axios
//       .delete(`${BASE_URL}/${endpoint}`, options)
//       .catch((error: any) => handleHttpError(error));
//   };

//   const patch = async (endpoint: any, data = {}, options = {}) => {
//     Object.assign(options, getCommonOptions());
//     return axios
//       .delete(`${BASE_URL}/${endpoint}`, options)
//       .catch((error: any) => handleHttpError(error));
//   };

//   return {
//     get,
//     post,
//     delete: deleteMethod,
//     patch,
//     saveToken,
//     removeToken,
//     accessToken,
//   };
// };

// export default BaseHttpService;