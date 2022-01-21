import React from "react";
import "../../styles/cart.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useSelector } from "react-redux";
import { selectCartItem } from "../../store/cart/selector";

function CartIcon() {
  const cartItems = useSelector(selectCartItem);
  //console.log("cart items", cartItems);

  const itemCount = cartItems.reduce(
    (accumulatedQuantity, cartItems) =>
      accumulatedQuantity + cartItems.quantity,
    0
  );

  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

export default CartIcon;
