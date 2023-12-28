import React from "react";
import User_HP_DL from "../Major_Component/User_HP_DL";
import User_HP_DR from "../Major_Component/User_HP_DR";
const User_HP = () => {
  return (
    <div className="User_HP">
      {console.log("User_HP Rendered...")}
      <User_HP_DL />
      {/* <User_HP_CB /> */}
      <User_HP_DR />
    </div>
  );
};
export default User_HP;
