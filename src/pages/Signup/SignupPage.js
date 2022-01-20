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
    console.log("email and password", name, email, password);
    dispatch(signUp(name, email, password));
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
            // value={email}
            onChange={(event) => setName(event.target.value)}
            placeholder="your name"
            required
          />
          <input
            type="email"
            //value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="@gmail.com"
            required
          />
          <input
            type="password"
            //value={password}
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
