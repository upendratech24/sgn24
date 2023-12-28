import React from "react";
import { SB_Component } from "../UI_Component/Other_Component";

const User_HP_DL_M = () => {
  return (
    <div className="User_HP_DL_M">
      <SB_Component Title="Home" />
      <SB_Component Title="Dashboard" />
      <SB_Component Title="To Do List" />
      <SB_Component Title="My Notebook" />
      <SB_Component Title="Peer Point" />
      <SB_Component Title="Practice" />
      <SB_Component Title="Market Place" />
      {console.log("User_HP_DL_M Rendered...")}
    </div>
  );
};

export default User_HP_DL_M;
