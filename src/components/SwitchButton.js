import React from "react";

const SwitchButton = (props) => (
  <button onClick={props.click}>{props.active ? "STOP" : "START"}</button>
);

export default SwitchButton;
