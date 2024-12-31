import React, { useState } from "react";
import "./PasswordInput.css";

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="input">
      <input type={showPassword ? "text" : "password"} placeholder="Password" />
      {showPassword ? (
        <i
          className="fa-solid fa-eye"
          onClick={() => {
            toggleShowPassword();
          }}
        />
      ) : (
        <i
          className="fa-solid fa-eye-slash"
          onClick={() => {
            toggleShowPassword();
          }}
        />
      )}
    </div>
  );
};

export default PasswordInput;
