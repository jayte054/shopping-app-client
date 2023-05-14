// import {observable, action} from "mobx"
// import {authService} from "../services/auth.service"

// export default class UserStore {
//     @observable username: string | null = null

//     constructor(private authService: typeof authService) {}

//     @action
//     async signin(username: string, password: string): Promise<void> {
//         this.username = await this.authService.signin(username, password)
//     }

//     @action async signup(username: string, password: string): Promise<void> {
//          await this.authService.signup(username, password)
//     }

//     @action
//     async signout() {
//         this.username = null;
//         this.authService.removeToken()
//     }
// }

import { useState } from "react";
import  {signinService, removeToken, signupService}  from "../services/auth.service";

   async function SignIn({username, password}: any): Promise<any> {
    // const [user, setUser] = useState<any>({});
    const result = await signinService({username, password});
    // setUser(result);
    return result
  }
// async function SignIn(username: string, password: string): Promise<any> {
//     const [user, setUser] = useState<any>({});
  
//     try {
//       const result = await signinService(username, password);
//       setUser(result);
//       return result;
//     } catch (error) {
//       // Handle any errors that occurred during the sign-in process
//       throw error;
//     }
//   }

  async function SignUp(username: string, password: string): Promise<any> {
     return await signupService(username, password);
  }

  async function SignOut() {
    // const [Username, setUsername] = useState<any>({})
    // setUsername("");
    removeToken();
  }

 export const userStore = {
    SignIn,
    SignUp,
    SignOut,
  }

//   return UserStore

//   return {
//     username,
//     signIn,
//     signUp,
//     signOut,
//   };

// }



// import { observable, action } from 'mobx';
// import { useLocalObservable } from 'mobx-react';

// import { signin, signout, signup, removeToken, saveToken, loadToken } from '../services/auth.service';

// const AuthService = {
//     signin,
//     signout,
//     signup,
//     removeToken,
//     saveToken,
//     loadToken
// }
// const useUserStore = ( authService: AuthService) => {
//   const store = useLocalObservable(() => ({
//     @observable username: null,

//     @action async signin(username: string, password: string): Promise<void> {
//       store.username = await authService.signin(username, password);
//     },

//     @action async signup(username: string, password: string): Promise<void> {
//       await authService.signup(username, password);
//     },

//     @action async signout() {
//       store.username = null;
//       authService.signout();
//     },
//   }));

//   return store;
// };