import React from "react";
import { Link } from "react-router-dom";
import "../../styles/cart.styles.scss";
import CustomButton from "../Button/Button";
import CartItem from "./CartItem";

function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CartItem />
      </div>
      <Link to="/checkout">
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </Link>
    </div>
  );
}

export default CartDropdown;
