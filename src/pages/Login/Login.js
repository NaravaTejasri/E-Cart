import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../store/user/action";
import { selectToken } from "../../store/user/selector";
import "../../styles/login.styles.scss";

function Login() {
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [token, navigate]);

  function submitHandler(event) {
    event.preventDefault();
    console.log("email and password", email, password);
    dispatch(login(email, password));
    setEmail("");
    setPassword("");
  }

  return (
    <div className="sign-in">
      <div className="container">
        <h3>Sign in with your Email and Password</h3>
        <form onSubmit={submitHandler} className="form">
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="@gmail.com"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            required
          />
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
