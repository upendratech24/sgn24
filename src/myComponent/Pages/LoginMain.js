import React from "react";
import Login from "./Login";
import { Carousel1 } from "../UI_Component/Carousel_Component";
const LoginMain = () => {
  return (
    <div className="LoginMain_Container">
      <Carousel1 />
      <Login />
      {console.log("LoginMain Rendered...")}
    </div>
  );
};

export default LoginMain;
