import "./Button.scss";
import React from "react";
import {ButtonConfig} from "../../models";



export const Button: React.FC<ButtonConfig> = ({ text, style, className }) => {
  return (
    <button className={`btn ${className}`} style={style}>
      {text}
    </button>
  );
};
