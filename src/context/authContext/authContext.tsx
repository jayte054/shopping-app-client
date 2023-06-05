import React, {createContext, useState, useContext, useMemo} from "react"

interface UserContextProps  {
    children: React.ReactNode
}

export const AuthContext = createContext<any>(null)

 export const UserProvider: React.FC<UserContextProps> = ({children}:UserContextProps) => {
 const [user, setUser] = useState<any>(null)
 console.log(user)

 const updateUser = (userData: any) => {
    setUser(userData)
    console.log(userData)
 }
 console.log(user)
 const contextValue = useMemo(() =>  ({ user, updateUser }), [user]);

 return <AuthContext.Provider value={contextValue}>
    {children}
    </AuthContext.Provider>;
 }

