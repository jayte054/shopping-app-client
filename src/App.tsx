import React from 'react';
// import {Navigate, useLocation} from "react-router-dom";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import './App.css';
import LandingPage from "./components/landingpage/landingpage.components"
import  SignUpPage  from './pages/signup-page/signupPage.pages';
import  SignInPage  from './pages/signinPage/signinPage.pages';
import  Homepage  from './pages/homepage/homepage.pages';
import  Profile  from './pages/profile/profile.pages';
 import {getAuthToken} from "./services/auth.service"
import { ProtectAuthRoute } from './components/privateRoute.component';
import  ShoppingHistoryPage  from './pages/ShoppingHistoryPage/shoppingHistory.pages';
import { UserProvider } from './context/authContext/authContext';
import { DirectoryPage } from './pages/DirectoryPage/directoryPage';
import { CreateEntryPage } from './pages/DirectoryPage/createDirectoryentryPage';
import { ResetPassword } from './pages/resetPassword/resetPassword';


 function App() {

  return (
    <React.Fragment>
      <UserProvider>
      <Router>
        <Routes>
        <Route path ="/" element = {<LandingPage />} />
        <Route path ="/signup" element ={<SignUpPage />} />
        <Route path="/signin" element = {<SignInPage />} />
        <Route path="/resetPassword" element = {<ResetPassword />} />
        <Route element={<ProtectAuthRoute />}>
        <Route path="/auth/homepage"  element={<Homepage />} />
        <Route path="/auth/profile" element={<Profile />} />
        <Route path="/auth/shoppinghistory" element={<ShoppingHistoryPage />} />
        <Route path="/auth/directory" element={<DirectoryPage />} />
        <Route path="/auth/createEntry" element={<CreateEntryPage />} />
        </Route>
        </Routes>
      </Router>
      </UserProvider>
         
    </React.Fragment>
  )
  ;
}

 export default App
