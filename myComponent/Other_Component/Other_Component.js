import React from "react";

export const OrSeparator = () => {
  return (
    <div className="OrSeparator">
      <div className="OrSeparator_LR"></div>
      <div className="OrSeparator_M">OR</div>
      <div className="OrSeparator_LR"></div>
    </div>
  );
};
export const BWBr_Plain = (props) => {
  return <div className="BWBr_Plain">{props.Title}</div>;
};
export const BWBr_Blue = (props) => {
  return <div className="BWBr_Blue">{props.Title}</div>;
};
export const B_Plain = (props) => {
  return <div className="BWBr_Blue">{props.Title}</div>;
};
