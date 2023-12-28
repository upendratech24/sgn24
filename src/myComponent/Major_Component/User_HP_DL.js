import React from "react";
import User_HP_DL_U from "../Minor_Component/User_HP_DL_U";
import User_HP_DL_M from "../Minor_Component/User_HP_DL_M";
import User_HP_DL_L from "../Minor_Component/User_HP_DL_L";

const User_HP_DL = () => {
  return (
    <div className="User_HP_DL">
      <User_HP_DL_U />
      <User_HP_DL_M />
      <User_HP_DL_L />
      {console.log("User_HP_DL Rendered...")}
    </div>
  );
};
export default User_HP_DL;
