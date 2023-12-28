import React from "react";
import { useState } from "react";

export const Input1 = (props) => {
  const [Input1_Value, setInput1_Value] = useState();
  return (
    <input
      className="Input1"
      placeholder={props.Title}
      value={Input1_Value}
      onChange={(i) => {
        setInput1_Value(i.target.value);
        console.log(Input1_Value);
      }}
      Input1_Value={Input1_Value}
    ></input>
  );
};
