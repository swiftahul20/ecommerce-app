import React from "react";

const Input = ({ type, placeholder, value, onChange, name }) => {
  return (
    <input
      className="min-w-[40%] flex-1 rounded-lg border-2 p-2.5"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

export default Input;
