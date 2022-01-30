import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../store/user/action";
import { selectToken } from "../../store/user/selector";
import "../../styles/login.styles.scss";

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setisAdmin] = useState(false);

  const token = useSelector(selectToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [token, navigate]);

  function submitHandler(event) {
    event.preventDefault();
    console.log("email and password", name, email, password, isAdmin);
    dispatch(signUp(name, email, password, isAdmin));
    //setEmail("");
    //setPassword("");
  }

  return (
    <div className="sign-in">
      <div className="container">
        <h3>Sign Up </h3>
        <form onSubmit={submitHandler} className="form">
          <input
            type="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="your name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="@gmail.com"
            required
          />
          <label>I am an admin?</label>
          <input
            type="checkbox"
            value={isAdmin}
            onChange={(event) => setisAdmin(event.target.checked)}
          />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit" class="btn">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
