// import React from "react"
// import { Link } from "react-router-dom"
// import "./signupPage.pages.css"
// import {useState} from "react"
// import nodemailer from "nodemailer"
// import {inject} from "mobx-react"
// import toastify from "toastify-js"
// import "toastify-js/src/toastify.css"
// import NavBarSignUp from "../../components/Navbar/navbar.signup"
// import { Footer } from "../../components/footer/footer.components"
// import ErrorMessage from "../../components/ErrorMessage"

//  const SignUpPage = ({userStore, routerStore}: any) => {
//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")
//     const [showPassword, setShowPassword] = useState(false)
//     const [errorMessage, setErrorMessage] = useState(null)
//     const {SignUp} = userStore

//     // const sendWelcomeEmail = async(emailAddress: string, username: string) => {
//     //     const transporter = nodemailer.createTransport({
//     //         service: "gmail",
//     //         auth:{
//     //             user:"shoppingmanager317@gmail.com",
//     //             pass:"$Admin123$"
//     //         }
//     //     });

//     //     const mailOptions = {
//     //         from: "shoppingmanager317@gmail.com",
//     //         to: emailAddress,
//     //         subject: "Welcome to Shopping Manager",
//     //         html: `<h1>Wecome ${username}</h1>
//     //                 <p>Thank you for signing up, have a great shopping experience</p>`
//     //     };

//     //     transporter.sendMail(mailOptions, function (error: any, info: any) {
//     //         try{
//     //             if(error){
//     //                 console.log(error)
//     //                 toastify({
//     //                     text: "Error sending mail",
//     //                     duration: 3000,
//     //                     gravity: "top",
//     //                     backgroundColor: "red",
//     //                     close: true,
//     //                 }).showToast()
//     //             } else {
//     //                 console.log("email sent successfully")
//     //                 toastify({
//     //                     text:"Signup successful, welcome mail successfully sent",
//     //                     duration: 3000,
//     //                     gravity: "top",
//     //                     backgroundColor: "green",
//     //                     close: true,
//     //                 }).showToast()
//     //             }
//     //         } catch (error) {
//     //             console.log(error);
//     //             toastify({
//     //               text: 'Error sending email',
//     //               duration: 3000,
//     //               gravity: 'top',
//     //               backgroundColor: 'red',
//     //               close: true,
//     //             }).showToast();
//     //           }
//     //     });
//     // }



//     const handleSubmit = async(e:React.SyntheticEvent) => {
//         try{
//             e.preventDefault()
//              await SignUp(username, password)
//             //  await sendWelcomeEmail(username, username)
//             // document.location.href="/signin"
//             toastify({
//                 text:"signup successful",
//                 duration:3000,
//                 gravity:"top",
//                 backgroundColor: "green",
//                 close: true
//             }).showToast()
//         }catch(error: any){
//             const errorMessage = error.response.data.message
//             setErrorMessage(errorMessage)
//             toastify({
//                 text:"signup unsuccessful",
//                 duration:3000,
//                 gravity:"top",
//                 backgroundColor: "red",
//                 close: true
//             }).showToast()
//         }
//     }

//     return (
//         <React.Fragment>
//             <div className = "signup-container">
//             <NavBarSignUp />
//             <h2>please provide your sign up details below</h2>

//             {errorMessage && <ErrorMessage message={errorMessage} />}

//             <form >
//             <p className="signup-detail">Email Address</p>
//             <input className = "signup-input" 
//                    type="email" 
//                    placeholder="email address" 
//                    onChange={e => setUsername(e.target.value)}
//                    required/>
//             <p className="signup-detail">Password</p>
//             <input className="signup-input" 
//                    type="password" 
//                    placeholder="password" 
//                    onChange={e => setPassword(e.target.value)}
//                    required/>
//             <p> If you already have an account, please <Link to="/signin"> sign in </Link>  </p>
//             <button type= "button" onClick={(e)=>handleSubmit(e)}> Sign Up </button>
//             </form>
//         </div>
//         <Footer />
//         </React.Fragment>
        
//     )
// }

// export default inject("userStore", "routerStore")(SignUpPage)

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {inject} from "mobx-react"
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./signupPage.pages.css";
import toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import NavBarSignUp from "../../components/Navbar/navbar.signup";
import { Footer } from "../../components/footer/footer.components";
import ErrorMessage from "../../components/ErrorMessage";

const SignUpPage = ({ userStore, routerStore }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const { SignUp } = userStore;
  const navigate = useNavigate()
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    try {
      e.preventDefault();
      await SignUp(username, password);
      toastify({
        text: "signup successful",
        duration: 3000,
        gravity: "top",
        backgroundColor: "green",
        close: true,
      }).showToast();
        navigate("/signin")

    } catch (error: any) {
      const errorMessage = error.response.data.message;
      setErrorMessage(errorMessage);
      toastify({
        text: "signup unsuccessful",
        duration: 3000,
        gravity: "top",
        backgroundColor: "red",
        close: true,
      }).showToast();
    }
  };

  return (
    <React.Fragment>
      <div className="signup-container">
        <NavBarSignUp />
        <h2>please provide your sign up details below</h2>

        {errorMessage && <ErrorMessage message={errorMessage} />}

        <form>
          <p className="signup-detail">Email Address</p>
          <input
            className="signup-input"
            type="email"
            placeholder="email address"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <p className="signup-detail">Password</p>
          <div className="password-input-wrapper">
            <input
              className="signup-input"
              type={showPassword ? "text" : "password"}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
              className="toggle-password-visibility"
              type="button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          <p>
            If you already have an account, please{" "}
            <Link to="/signin"> sign in </Link>{" "}
          </p>
          <button type="button" onClick={(e) => handleSubmit(e)}>
            Sign Up
          </button>
        </form>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default inject("userStore", "routerStore")(SignUpPage)
