import React from "react";
import "../../styles/cart.styles.scss";
import CustomButton from "../Button/Button";
import CartItem from "./CartItem";

function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CartItem />
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

export default CartDropdown;
