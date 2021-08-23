import { checkPropTypes } from "prop-types";
import React, { Component } from "react";

import "./button.styles.scss";

const Button = ({ children }) => (
  <button className="select_btn" type="button">
    {children}
  </button>
);

export default Button;
