import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/login.styles.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="sign-in">
      <div className="container">
        <h3>Sign in with your Email and Password</h3>
        <form className="form">
          <input type="email" placeholder="@gmail.com" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" class="btn">
            Login
          </button>
          <p class="message">
            Already registered?<Link to="/signup">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
