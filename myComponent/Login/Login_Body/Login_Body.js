import React from "react";
import Login_Body_LB from "./Login_Body_LB/Login_Body_LB";
import Login_Body_RB from "./Login_Body_RB/Login_Body_RB";

const Login_Body = () => {
  return (
    <div className="Login_Body">
      <Login_Body_LB />
      <Login_Body_RB />
      {console.log("Login_Body Running...")}
    </div>
  );
};

export default Login_Body;
