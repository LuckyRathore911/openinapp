import React from "react";
import "../styles/signInForm.css";

const SignInForm = () => {
  return (
    <div>
      <form className="sign-in-form">
        <p className="form-value-type">Email address</p>
        <input type="email" placeholder="johndoe@gmail.com"></input>
        <p className="form-value-type">Password</p>
        <input type="password"></input>
        <div className="password-forgot">
          <a>Forgot Password?</a>
        </div>
        <button>Sign In</button>
      </form>
      <p className="bottom-line-auth">
        Don't have an account?<a> Register here</a>
      </p>
    </div>
  );
};

export default SignInForm;
