import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectToken, selectUser } from "../../store/user/selector";
import CartDropdown from "../Cart/CartdropDown";
import CartIcon from "../Cart/CartIcon";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Header() {
  //const token = useSelector(selectToken);
  const { token, isAdmin } = useSelector(selectUser);

  const [cart, setCart] = useState(false);
  //console.log(cart);

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

        <div onClick={() => setCart(!cart)}>
          <CartIcon />
        </div>
        {token && isAdmin === true ? "isAdmin" : null}
        {loginLogoutControls}
      </div>
      {cart && <CartDropdown />}
    </div>
  );
}
