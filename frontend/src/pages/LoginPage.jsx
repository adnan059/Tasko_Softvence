import React from "react";
import loginBg from "../assets/images/login-bg.png";
import "../assets/styles/signup.css";
import SignupForm from "../components/SignupForm";
import OrDivider from "../components/OrDivider";
import { Link } from "react-router-dom";
import "../assets/styles/login.css";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="imageContainer">
        <img src={loginBg} alt="" />
      </div>

      <div className="formContainer">
        <div className="title">
          <h1>Login</h1>
          <p>WelcomeBack,Please Enter your Details to Log In.</p>
        </div>
        <LoginForm />
        <div className="navigateToSignup">
          <OrDivider />
          <p>
            Don't have an account? <Link to={"/sign-up"}>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
