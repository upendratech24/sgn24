import React from "react";
import ReactDOM from "react-dom";
import Login_Header from "./Login_Header/Login_Header.js";
import Login_Body from "./Login_Body/Login_Body.js";
import Login_Footer from "./Login_Footer/Login_Footer.js";

const Login = () => {
  return (
    <div className="Login_Container">
      <Login_Header />
      <Login_Body />
      <Login_Footer />
      {console.log("Login Running...")}
    </div>
  );
};

export default Login;
