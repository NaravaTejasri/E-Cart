import React from "react";
import "../../styles/cart.styles.scss";
import CustomButton from "../Button/Button";

function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

export default CartDropdown;
