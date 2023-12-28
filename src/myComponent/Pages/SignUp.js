import React from "react";
import { Link } from "react-router-dom";
import { Input1 } from "../UI_Component/Input_Component";
import { Button1 } from "../UI_Component/Button_Component";
import {
  OrSeparator,
  BWBr_Plain,
  BWBr_Blue,
} from "../UI_Component/Other_Component.js";
import { Text1, Text2 } from "../Text_Component/Text_Component";
const SignUp = (props) => {
  const User_PNOE = props.Input1_Value;
  const User_FN = props.Input1_Value;
  const User_NM = props.Input1_Value;
  const User_PWD = props.Input1_Value;
  return (
    <div className="SignUp">
      <div className="SignUp_Container_U">
        <div className="Login_Container_U_Logo">*** SGN 24 ***</div>
        <Text1 Title="Sign up for *******************" />
        <Button1 Title="Log in with Google" />
        <OrSeparator />
        <Input1 Title="Phone Number or Email" User_PNOE={props.Input1_Value}>
          {console.log(
            "Changed state of User Phone Number or Email is : " + User_PNOE
          )}
        </Input1>
        <Input1 Title="Full Name" User_FN={props.Input1_Value}>
          {console.log("Changed state of User Fullname is : " + User_FN)}
        </Input1>
        <Input1 Title="Username" User_NM={props.Input1_Value}>
          {console.log("Changed state of User Name is : " + User_NM)}
        </Input1>
        <Input1 Title="Password" User_PWD={props.Input1_Value}>
          {" "}
          {console.log("Changed state of User Password is : " + User_PWD)}
        </Input1>
        <Text2
          Title_1="People who use our service may have uploaded your contact information to Instagram."
          Title_2=" Learn More"
        />
        <Text2
          Title_1="By signing up, you agree to our"
          Title_2=" Terms , Privacy Policy and Cookies Policy ."
        />
        <Button1 Title="Sign up" />
      </div>
      <div className="Login_Container_M">
        <span className="">Have an account ?</span>
        <Link to="/accounts/login/" className="Login_Container_M_SU">
          Log in
        </Link>
      </div>
      <div className="Login_Container_L">App Coming Soon...</div>
    </div>
  );
};

export default SignUp;
