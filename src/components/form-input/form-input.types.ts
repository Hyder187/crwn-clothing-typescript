import { ChangeEvent, HTMLInputTypeAttribute } from "react";

export interface IFormInput {
  name: string;
  label?: string;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  type: HTMLInputTypeAttribute;
  value: string | number | readonly string[] | undefined;
  required: boolean | undefined;
}
