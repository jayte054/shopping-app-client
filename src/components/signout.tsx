// import { userStore } from "../stores/user.stores"
import {useEffect, useState} from "react"
import {inject, observer} from "mobx-react"


 const Signout = ({userStore}: any) => {
    const [errorMessage, setErrorMessage] = useState(null)
    const {SignOut} = userStore
    useEffect(() => {
        handleSignout()
    },[] )


    const handleSignout = async() => {
        console.log("hit")
        try{
            await SignOut()
            document.location.href = "/"
        }catch(error: any){
           const errorMessage = error.response.data.message
            setErrorMessage(errorMessage)
        }
    }
    return (
        // <span className="nabvar-auth" 
        // onClick=
        <>
        {handleSignout}
        </>
        // >
            // Signout
        // </span>
    )
}

export default inject("userStore")(observer(Signout))
// export default inject("userStore", "routerStore")(Signout)