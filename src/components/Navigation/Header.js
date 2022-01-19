import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
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
        <Link className="option" to="/login">
          LOGIN
        </Link>
      </div>
    </div>
  );
}
