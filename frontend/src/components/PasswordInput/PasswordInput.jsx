import React, { useState } from "react";
import "./PasswordInput.css";

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="input">
      <input type={showPassword ? "text" : "password"} placeholder="Password" />
      {showPassword ? (
        <i
          className="fa-solid fa-eye"
          onClick={() => {
            togglePasswordVisibility();
          }}
        />
      ) : (
        <i
          className="fa-solid fa-eye-slash"
          onClick={() => {
            togglePasswordVisibility();
          }}
        />
      )}
    </div>
  );
};

export default PasswordInput;
