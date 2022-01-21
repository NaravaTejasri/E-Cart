import React from "react";
import "../../styles/checkoutItems.styles.scss";

function CheckoutItem({ item }) {
  const { name, price, quantity, imageUrl } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}€</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
}

export default CheckoutItem;
