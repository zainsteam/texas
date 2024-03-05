import React from "react";
// import "./Forms.css";

const Input_field = (props) => {
  return (
    <input
      style={{ marginTop: "18px" }}
      onChange={props.onChange}
      className={`form-input-field ${props.class}`}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      required={props.required}
      value={props.value}
    />
  );
};
export default Input_field;
