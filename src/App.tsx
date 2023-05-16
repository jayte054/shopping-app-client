import React from 'react';
// import {Navigate, useLocation} from "react-router-dom";
import {Route, BrowserRouter as Router, Routes, Navigate, useLocation} from "react-router-dom"
import './App.css';
import LandingPage from "./components/landingpage/landingpage.components"
import  SignUpPage  from './pages/signup-page/signupPage.pages';
import  SignInPage  from './pages/signinPage/signinPage.pages';
import { Homepage } from './pages/homepage/homepage.pages';
import { Profile } from './pages/profile/profile.pages';
 import {getAuthToken} from "./services/auth.service"
import { ProtectAuthRoute } from './components/privateRoute.component';
//  import { GuardedRoute, GuardFunction } from 'react-router-guards';
//  import  PrivateRoute  from './components/privateRoute.component';

function PrivateRoute({ element, path, ...props }: any) {
  const requireAuth = async (to:any, from:any, next:any) => {
    // Check if the user is authenticated (implement your own authentication check logic here)
    const isAuthenticated = await getAuthToken(); // Replace with your authentication check

    if (to.meta.auth) {
      if (isAuthenticated) {
        next(); // Allow access to the protected route
      } else {
        next('/signin'); // Redirect to the signin page
      }
    } else {
      next(); // Allow access to other routes
    }
  };

  return <Route {...props} path={path} element={element} guard={requireAuth} />;
}


 function App() {


  return (
    <React.Fragment>
      <Router>
      {/* <GuardProvider guards={[requireAuth]}> */}
        <Routes>
        <Route path ="/" element = {<LandingPage />} />
        <Route path ="/signup" element ={<SignUpPage />} />
        <Route path="/signin" element = {<SignInPage />} />
        <Route element={<ProtectAuthRoute />}>
        <Route path="/homepage"  element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        </Route>
        
        {/* <PrivateRoute path="/homepage" element={<Homepage />} meta={{ auth: true }} />
        <PrivateRoute path="/profile" element={<Profile />} meta={{ auth: true }} /> */}
        </Routes>
        {/* </GuardProvider> */}
      </Router>
    </React.Fragment>
  )
  ;
}

export default (App);
