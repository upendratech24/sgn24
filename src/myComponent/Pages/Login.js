import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Input1 } from "../UI_Component/Input_Component";
import { Button1 } from "../UI_Component/Button_Component";
import {
  OrSeparator,
  BWBr_Plain,
  BWBr_Blue,
} from "../UI_Component/Other_Component";

const Login = (props) => {
  const User_PNOE = props.Input1_Value;
  const User_PWD = props.Input1_Value;
  return (
    <div className="Login_Container">
      <div className="Login_Container_U">
        <div className="Login_Container_U_Logo">*** SGN 24 ***</div>
        {/* User Login - Input Phone number, username, or email */}
        <Input1
          Title="Phone number, username, or email"
          User_PNOE={props.Input1_Value}
        >
          {console.log(
            "Changed state of User Phone Number or Email is : " + User_PNOE
          )}
        </Input1>
        {/* User Login - Input Phone number, username, or email */}
        <Input1 Title="Password" User_PWD={props.Input1_Value}>
          {console.log("Changed state of User Password is : " + User_PWD)}
        </Input1>
        <Button1 Title="Log in" />
        <OrSeparator />
        <BWBr_Blue Title="Log in with Google" />
        <BWBr_Plain Title="Forgot Password ?" />
      </div>
      <div className="Login_Container_M">
        <span className="">Don't have an account ?</span>
        <Link to="/accounts/emailsignup/" className="Login_Container_M_SU">
          Sign Up
        </Link>
      </div>
      <div className="Login_Container_L">App Coming Soon...</div>
    </div>
  );
};

export default Login;
