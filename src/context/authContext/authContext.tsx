// import React, {createContext, useState, useContext, useMemo} from "react"

// interface UserContextProps  {
//     children: React.ReactNode;
// }

// export const AuthContext = createContext<any>("")

//  export const UserProvider: React.FC<UserContextProps> = ({children}:UserContextProps) => {
//  const [user, setUser] = useState<any>(null)
//  console.log(user)

//  const updateUser = (userData: any) => {
//     setUser(userData)
//    //  console.log(userData)
//  }
// //  console.log(updateUser({name: "justin", id: "1234"}))
//  const contextValue = useMemo(() =>  ({ user, updateUser }), [user]);
// console.log(user)
//  return <AuthContext.Provider value={contextValue}>
//     {children}
//     </AuthContext.Provider>;
//  }

 import React, { createContext, useState, useContext, useMemo } from 'react';

 interface UserContextProps {
   children: React.ReactNode;
 }
 
 export const AuthContext = createContext<any>(null);
 
 export const UserProvider: React.FC<UserContextProps> = ({ children }: UserContextProps) => {
   const [user, setUser] = useState<any>({username: "justin", id: "1234"});
   const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

   const updateUser = (userData: any) => {
     setUser(userData);
     console.log(userData)
      // return userData
   };
   
 
   const contextValue = useMemo(() => ({ user, updateUser }), [user]);
 
   return (
     <AuthContext.Provider value={{ user, updateUser }}>
       {children}
     </AuthContext.Provider>
   );
 };
 
 export default AuthContext;