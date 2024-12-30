import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/PasswordInput/PasswordInput";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <h1>Signup</h1>
      <input type="text" placeholder="Fullname" className="input" />
      <input type="email" placeholder="Email" className="input" />
      <PasswordInput />
      <button type="submit">Signup</button>
      <p>
        Already have an account,{" "}
        <Link to="/login" className="link">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
