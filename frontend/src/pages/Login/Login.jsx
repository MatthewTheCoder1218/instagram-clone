import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Login</h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
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
