import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/PasswordInput/PasswordInput";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Login</h1>
      <input type="email" placeholder="Email" className="input-email" />
      <PasswordInput />
      <button type="submit">Login</button>
      <p>
        Don't have an account,{" "}
        <Link to="/signup" className="link">
          Create one
        </Link>
      </p>
    </div>
  );
};

export default Login;
