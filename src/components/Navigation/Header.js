import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectToken } from "../../store/user/selector";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Header() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img className="logo" src="/images/shopping-bag.png" alt="" />
      </Link>
      <div className="options">
        <Link className="option" to="/">
          CATEGORIES
        </Link>
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contant">
          CONTACT
        </Link>
        {loginLogoutControls}
      </div>
    </div>
  );
}
