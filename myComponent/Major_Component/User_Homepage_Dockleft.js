import React from "react";
import User_Homepage_Dockleft_U from "../Minor_Component/User_Homepage_Dockleft_U";
import User_Homepage_Dockleft_M from "../Minor_Component/User_Homepage_Dockleft_M";
import User_Homepage_Dockleft_L from "../Minor_Component/User_Homepage_Dockleft_L";

const User_Dockleft = () => {
  return (
    <div className="User_Homepage_Dockleft">
      <User_Homepage_Dockleft_U />
      <User_Homepage_Dockleft_M />
      <User_Homepage_Dockleft_L />
      {console.log("User_Homepage_Dockleft Rendered...")}
    </div>
  );
};
export default User_Dockleft;
