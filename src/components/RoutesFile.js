import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './FirstPage';
import Dashboard from './Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';
import PasswordReset from './PasswordReset/PasswordReset';
import EmailVerification from "./EmailVerification";
import ForgotPassword from './ForgotPassword/ForgotPassword';
import SuccessfullRegistration from './SuccessfullRegistration/SuccessfullRegistration';

const RoutesFile = ({isAuthenticated,setIsAuthenticated}) => {
  return (
    <BrowserRouter>
      <Routes>
        {/* home page par landing */}
        <Route exact path="/" element={<FirstPage setIsAuthenticated={setIsAuthenticated}/>} />
        <Route exact path="/success" element={<SuccessfullRegistration />} />
        <Route exact path="/api/v1/verify/:code/:code" element={<EmailVerification />} />
        <Route exact path="/api/v1/password/reset/:code" element={<PasswordReset />} />
        {/* <Route exact path="/passwordreset" element={<PasswordReset />} /> */}
        {/* this  is route that will depend on whether the user is logged in or not. if not logged in then the state value we get is false,else true */}
        {/* on path /dashboard we will render element based on value os isAuthenticated. */}
        <Route exact path="/dashboard" element={<PrivateRoute Component={Dashboard} auth={isAuthenticated} />} />
        <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  )
}
export default RoutesFile
