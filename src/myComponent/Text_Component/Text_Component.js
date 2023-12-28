import React from "react";

export const Text1 = (props) => {
  return <div className="Text1">{props.Title}</div>;
};
export const Text2 = (props) => {
  return (
    <div className="Text2">
      <span className="Text2_1">
        {props.Title_1} <a className="Text2_2">{props.Title_2}</a>
      </span>
    </div>
  );
};
