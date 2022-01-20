import React, { useState } from "react";
import "../../styles/cart.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

function CartIcon() {
  const [cart, setCart] = useState(false);

  return (
    <div className="cart-icon" onClick={() => setCart(!cart)}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

export default CartIcon;
