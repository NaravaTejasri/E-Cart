import React from "react";
import { Link } from "react-router-dom";

export default function LoggedOut() {
  return (
    <>
      <Link className="option" to="/login">
        LOGIN
      </Link>
    </>
  );
}
