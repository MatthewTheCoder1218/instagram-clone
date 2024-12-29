import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <h1>Login</h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
      <p>Don't have an account, Create one</p>
    </div>
  );
};

export default Login;
