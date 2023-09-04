import React from "react";
import Header from "../../components/Header";
import UserPanel from "../../components/UserPanel/index";
import { SignUpWrapper } from "./SignUpStyles";





const SignUp = () => {
  return (
    <SignUpWrapper >
      <Header />
      <UserPanel />
    </SignUpWrapper >
  );
};

export default SignUp;
