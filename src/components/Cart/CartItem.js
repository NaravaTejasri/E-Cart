import React from "react";
import { useSelector } from "react-redux";
import { selectCartItem } from "../../store/cart/selector";

import "../../styles/cart.styles.scss";

function CartItem() {
  const items = useSelector(selectCartItem);
  //console.log("item", items);

  return (
    <div className="cart-item">
      {items.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.imageUrl} alt="item" />
            <div className="item-details">
              <span className="name">{item.name}</span>
              <span className="price">
                {item.quantity} * {item.price}€
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartItem;
