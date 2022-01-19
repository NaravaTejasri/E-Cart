import React from "react";
import "../../styles/cart.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

function CartItem() {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

export default CartItem;
