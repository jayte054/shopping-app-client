import React from 'react';
// import {Navigate, useRoutes} from "react-router-dom";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import './App.css';
import LandingPage from "./components/landingpage/landingpage.components"
import  SignUpPage  from './pages/signup-page/signupPage.pages';
import  SignInPage  from './pages/signinPage/signinPage.pages';
import { Homepage } from './pages/homepage/homepage.pages';
import { Profile } from './pages/profile/profile.pages';
// import  Signout  from './components/signout';

function App() {
  // const mainRoutes = {
  //   path: "/",
  //   element: <LandingPage />,
  //   children: [
  //     {path: "signup", element: <Navigate to = "./pages/signup-page/signupPage.pages" />} 
  //   ]
  // }
  // const routing = useRoutes([mainRoutes])
  // return <> {routing} </>
  return (
    <React.Fragment>
      <Router>
        <Routes>
        <Route path ="/" element = {<LandingPage />} />
        <Route path ="/signup" element ={<SignUpPage />} />
        <Route path="/signin" element = {<SignInPage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/signout" element={<Signout />} /> */}
        </Routes>
      </Router>
    </React.Fragment>
  )
  ;
}

export default (App);
