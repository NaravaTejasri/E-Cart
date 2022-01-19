import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/action";
import { selectUser } from "../../store/user/selector";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <p style={{ padding: ".8rem 1rem" }}>{user.email}</p>
      <button onClick={() => dispatch(logOut())}>LOGOUT</button>
    </>
  );
}
