
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
        <NavBarSignUp />
      <div className="signup-containers">
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
