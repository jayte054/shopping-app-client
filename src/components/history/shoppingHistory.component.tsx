import React, { useState } from "react"

export const ShoppingHistory = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const handleClick = (e:any) => {
        e.preventDefault()
        console.log("history")

        try{
            alert("history of shopping lists")
            console.log("history")
        }catch(error:any){
            const errorMessage = "you have no shopping-lists"
            setErrorMessage(errorMessage)
        }
    }

    return (
        <div>
        <button type="button" onClick={(e) => handleClick(e)}> Shopping History </button>
    </div>
    )
       
}