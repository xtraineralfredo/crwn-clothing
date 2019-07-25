import React from "react";
import SignIn from "../../components/sign-in/sign-in.components";
import "./sign-in-and-sign-up.scss";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
