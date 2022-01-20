import React from "react";

import "../../styles/button.styles.scss";

const CustomButton = ({ ...otherProps }) => (
  <button className={`custom-button`} {...otherProps}></button>
);

export default CustomButton;

/* const CustomButton = ({ children, inverted, ...otherProps }) => (
    <button
      className={`${inverted ? "inverted" : ""} 
     custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  ); */
