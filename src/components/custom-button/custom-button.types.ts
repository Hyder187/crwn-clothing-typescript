import { ReactNode } from "react";

export interface ICustomButton {
  type?: "button" | "submit" | "reset" | undefined;
  children: ReactNode;
  onClick?: () => void;
  inverted?: boolean;
  isGoogleSignIn?: boolean;
}
