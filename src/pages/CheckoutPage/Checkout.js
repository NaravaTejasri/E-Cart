import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/Checkout/CheckoutItem";
import { selectCartItem } from "../../store/cart/selector";
import "../../styles/checkout.styles.scss";

function Checkout() {
  const items = useSelector(selectCartItem);
  const totalPrice = items.reduce(
    (accumulatedQuantity, cartItems) =>
      accumulatedQuantity + cartItems.quantity * cartItems.price,
    0
  );
  console.log("total price", totalPrice);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {items.map((item) => {
        return <CheckoutItem key={item.id} item={item} />;
      })}
      <div className="total">TOTAL:{totalPrice}€</div>
    </div>
  );
}

export default Checkout;
