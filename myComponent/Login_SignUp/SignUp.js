import React from "react";
import { Input1 } from "../Input_Component/Input_Component";
import { Button1 } from "../Button_Component/Button_Component";
import {
  OrSeparator,
  BWBr_Plain,
  BWBr_Blue,
} from "../Other_Component/Other_Component";
import { Text1, Text2 } from "../Text_Component/Text_Component";
const SignUp = () => {
  return (
    <div className="SignUp">
      <div className="SignUp_Container_U">
        <div className="Login_Container_U_Logo">*** SGN 24 ***</div>
        <Text1 Title="Sign up for *******************" />
        <Button1 Title="Log in with Google" />
        <OrSeparator />
        <Input1 Title="Mobile Number or Email" />
        <Input1 Title="Full Name" />
        <Input1 Title="Username" />
        <Input1 Title="Password" />
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
        <span className="Login_Container_M_SU">Log in</span>
      </div>
      <div className="Login_Container_L">App Coming Soon...</div>
    </div>
  );
};

export default SignUp;
