 

 import React, { createContext, useState, useContext, useMemo } from 'react';

 interface UserContextProps {
   children: React.ReactNode;
 }
 
 export const AuthContext = createContext<any>(null);
 
 export const UserProvider: React.FC<UserContextProps> = ({ children }: UserContextProps) => {
   const [user, setUser] = useState<any>({username: "", id: ""});
   const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

   const updateUser = (userData: any) => {
     setUser(userData);
   };
   
 
   const contextValue = useMemo(() => ({ user, updateUser }), [user]);
 
   return (
     <AuthContext.Provider value={{ user, updateUser }}>
       {children}
     </AuthContext.Provider>
   );
 };
 
 export default AuthContext;