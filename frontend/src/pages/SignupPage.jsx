import React from "react";
import signupBg from "../assets/images/signup-bg.png";
import "../assets/styles/signup.css";
import SignupForm from "../components/SignupForm";
import OrDivider from "../components/OrDivider";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="signup">
      <div className="imageContainer">
        <img src={signupBg} alt="" />
      </div>

      <div className="formContainer">
        <div className="title">
          <h1>Sign Up</h1>
          <p>To Create Account, Please Fill in the From Below.</p>
        </div>
        <SignupForm />
        <div className="navigateToLogin">
          <OrDivider />
          <p>
            Already have an account? <Link to={"/login"}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
