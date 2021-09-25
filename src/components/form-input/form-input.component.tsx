import React from "react";
import "./form-input.styles.scss";
import { IFormInput } from "./form-input.types";

const FormInput: React.FC<IFormInput> = ({
  handleChange,
  label,
  type,
  value,
  required,
  name,
}) => (
  <div className="group">
    <input
      name={name}
      className="form-input"
      onChange={handleChange}
      type={type}
      required={required}
      value={value}
    />
    {label ? <label className={`form-input-label`}>{label}</label> : null}
  </div>
);

export default FormInput;
