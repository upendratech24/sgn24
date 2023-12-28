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

// Sidebar Component

export const SB_LP_Logoimg = (props) => {
  return <img className="SB_LP_Logoimg" src={props.Imgsrc}></img>;
};
export const SB_RP_Title = (props) => {
  return <div className="SB_RP_Title">{props.Title}</div>;
};
export const SB_Component = (props) => {
  return (
    <div className="SB_Component">
      <SB_LP_Logoimg Imgsrc={props.Imgsrc} />
      <SB_RP_Title Title={props.Title} />
    </div>
  );
};
