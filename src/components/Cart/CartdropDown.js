import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectCartItem } from "../../store/cart/selector";
import "../../styles/cart.styles.scss";
import CustomButton from "../Button/Button";
import CartItem from "./CartItem";

function CartDropdown(props) {
  const items = useSelector(selectCartItem);
  const navigate = useNavigate();

  function navigateToCheckout() {
    navigate("/checkout");
    props.onCartClose();
  }

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CartItem />
      </div>

      {items.length ? (
        <CustomButton onClick={navigateToCheckout}>GO TO CHECKOUT</CustomButton>
      ) : null}
    </div>
  );
}

export default CartDropdown;
