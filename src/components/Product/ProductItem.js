import React from "react";
import "../../styles/product.styles.scss";

function ProductItem(props) {
  const { name, price, imageUrl } = props;
  return (
    <div className="product-item">
      <div
        className="img"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="product-footer">
        <span className="name">{name}</span>
        <span className="price">{price}€</span>
      </div>
    </div>
  );
}

export default ProductItem;
