import React from "react";
import User_HP_DR_U from "../Minor_Component/User_HP_DR_U";
import User_HP_DR_M from "../Minor_Component/User_HP_DR_M";
import User_HP_DR_L from "../Minor_Component/User_HP_DR_L";

const User_HP_DR = () => {
  return (
    <div className="User_HP_DR">
      <User_HP_DR_U />
      <User_HP_DR_M />
      <User_HP_DR_L />
    </div>
  );
};

export default User_HP_DR;
