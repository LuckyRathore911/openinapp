import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

import LeftSidebar from "../components/LeftSidebar";
import Dashboard from "./Dashboard";
import "../styles/auth.css";

const Auth = () => {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    // console.log("Encoded JWT ID Token: ", response.credential);
    var userDetailsObject = jwt_decode(response.credential);
    // console.log(userDetailsObject);

    setUser(userDetailsObject); //assigning the obtained user-data to user variable
  }

  useEffect(() => {
    if (typeof google !== "undefined" && google.accounts) {
      /* global google */
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_ID,
        callback: handleCallbackResponse,
      });
    }

    google.accounts.id.renderButton(document.getElementById("sign-in-div"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <>
      {/* If user does not exist then authorization page is displayed passing empty user to LeftSidebar*/}
      {Object.keys(user).length === 0 && (
        <div className="auth-main">
          <LeftSidebar user={""} />
          <div>
            <h1>Sign In</h1>
            <h4>Sign in to your Account</h4>
            <div id="sign-in-div"></div>
          </div>
        </div>
      )}

      {/* If a user exists then dashboard page is displayed */}
      {Object.keys(user).length !== 0 && (
        <div className="auth-main">
          <LeftSidebar user={user} />
          <Dashboard user={user} />
        </div>
      )}
    </>
  );
};

export default Auth;
