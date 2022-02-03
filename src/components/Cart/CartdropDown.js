import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartItem } from "../../store/cart/selector";
import "../../styles/cart.styles.scss";
import CustomButton from "../Button/Button";
import CartItem from "./CartItem";

function CartDropdown() {
  const items = useSelector(selectCartItem);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CartItem />
      </div>
      <Link to="/checkout">
        {items.length ? <CustomButton>GO TO CHECKOUT</CustomButton> : null}
      </Link>
    </div>
  );
}

export default CartDropdown;
