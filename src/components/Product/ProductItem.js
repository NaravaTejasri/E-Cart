import React from "react";
import "../../styles/product.styles.scss";
import CustomButton from "../Button/Button";

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
      <CustomButton>Add to Cart</CustomButton>
    </div>
  );
}

export default ProductItem;
