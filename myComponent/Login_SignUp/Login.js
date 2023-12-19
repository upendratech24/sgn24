import React from "react";
import { Input1 } from "../Input_Component/Input_Component";
import { Button1 } from "../Button_Component/Button_Component";
import {
  OrSeparator,
  BWBr_Plain,
  BWBr_Blue,
} from "../Other_Component/Other_Component";
const Login = () => {
  return (
    <div className="Login_Container">
      <div className="Login_Container_U">
        <div className="Login_Container_U_Logo">*** SGN 24 ***</div>
        <Input1 Title="Phone number, username, or email" />
        <Input1 Title="Password" />
        <Button1 Title="Log in" />
        <OrSeparator />
        <BWBr_Blue Title="Log in with Google" />
        <BWBr_Plain Title="Forgot Password ?" />
      </div>
      <div className="Login_Container_M">
        <span className="">Don't have an account ?</span>
        <span className="Login_Container_M_SU">Sign Up</span>
      </div>
      <div className="Login_Container_L">App Coming Soon...</div>
    </div>
  );
};

export default Login;
