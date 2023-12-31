import React, { useState } from "react";
import "../Components/Login.css";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const Login = ({ setToken }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
    console.log(token);
  };

  return (
    <div className="login_wrapper">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div className="login-btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
