import React from "react";
import { CustomButton } from "./Button.styles";

// import {
//   ButtonSecondary,
//   ButtonDefault,
//   CustomButton,
// } from "./Button.module.css";

// const currentColor = {
//   Secondary: ButtonSecondary,
//   Default: ButtonDefault,
// };

export const Button = ({ name, buttonColor }) => (
  <CustomButton size="small">{name}</CustomButton>
);
