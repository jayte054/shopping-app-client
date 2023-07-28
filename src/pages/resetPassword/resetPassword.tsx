import React, { useState } from "react"
import NavBar from "../../components/Navbar/navbar.landingpage"
import { Footer } from "../../components/footer/footer.components"
import { userStore } from "../../stores/user.stores"
import toastify from "toastify-js"
// import {useNavigate} from "react-router-dom"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import "./resetPassword.css"

export const ResetPassword = () => {
    // const navigate = useNavigate()
    const {ResetEmail, ResetPassword} = userStore
    const [username, setUsername] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [token, setToken] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const sendResetEmail = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        try{
            await ResetEmail(username)
            toastify({
                text:"reset email sent successfully",
                duration: 3000,
                gravity: "top",
                close: true,
                backgroundColor: "green"
            }).showToast()
        }catch(error){
            toastify({
                text: "Reset email not sent ",
                duration: 3000,
                gravity: "top",
                close: true,
                backgroundColor: "grey"
            }).showToast()
            throw error
           
        }
    }

    const resetPassword = async(e:React.SyntheticEvent) => {
        e.preventDefault()
        try{
            await ResetPassword({token, newPassword})
            toastify({
                text:"password reset successful",
                duration: 3000,
                gravity: "top",
                backgroundColor: "grey",
                close: true
            }).showToast()
            document.location.href = ("signin")
        }catch(error){
            toastify({
                text:"password reset unsuccessful",
                duration: 3000,
                gravity: "top",
                backgroundColor: "red",
                close: true 
            }).showToast()
            throw error
        }
    }

    return (
        <div>

        <NavBar />
        <div className="reset">
                <div className="reset-email">
                    <h1>Enter your Email Address</h1>
                    <p>Email Address</p>
                    <input type="text"
                           placeholder="email"
                           onChange={(e) => setUsername(e.target.value)} 
                           required/>
                    <button type = "button" onClick={sendResetEmail}>Send Email</button>
                </div>
                <div className="resetPassword">
                    <h1>Enter token and new password</h1>
                    <p>Token</p>
                    <input type="token"
                           placeholder="token"
                           onChange={(e) => setToken(e.target.value) }
                           required
                           />
                    <p>New Password</p>
                    <input type={showPassword ? "text" : "password"} 
                           placeholder="new password"
                           onChange={(e) => setNewPassword(e.target.value)}
                           required
                           />
                           <button
              className="toggle-password-visibility"
              type="button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
                    <button type="button" onClick={resetPassword}>Reset Password</button>
                </div>
        </div>
            <Footer />
        </div>
    )
}