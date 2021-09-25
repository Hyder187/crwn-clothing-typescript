import React from "react";
import "./custom-button.styles.scss";
import { ICustomButton } from "./custom-button.types";

const CustomButton: React.FC<ICustomButton> = ({
  children,
  isGoogleSignIn,
  inverted,
  type,
  onClick,
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

export default CustomButton;
