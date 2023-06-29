import React from "react";

import LeftSidebar from "../components/LeftSidebar";
import '../styles/auth.css';

const Auth = () => {
  return(
    <div className="auth-main">
      
      <div className="left-side">
        <LeftSidebar/>
      </div>

      <div>
        <h1>Sign In</h1>
        <h4>Sign in to your Account</h4>
        
      </div>
    </div>
  )
};

export default Auth;
