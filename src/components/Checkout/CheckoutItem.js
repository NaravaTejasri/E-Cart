import React from "react";
import { useDispatch } from "react-redux";
import { addItem, clearItem, removeItem } from "../../store/cart/action";
import "../../styles/checkoutItems.styles.scss";

function CheckoutItem({ item }) {
  const { name, price, quantity, imageUrl } = item;
  const dispatch = useDispatch();

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItem(item))}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(item))}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}€</span>
      <div className="remove-button" onClick={() => dispatch(clearItem(item))}>
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;
