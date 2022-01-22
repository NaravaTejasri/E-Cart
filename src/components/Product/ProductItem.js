import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cart/action";
import "../../styles/product.styles.scss";
import CustomButton from "../Button/Button";

function ProductItem(props) {
  const { id, name, price, imageUrl } = props;
  const dispatch = useDispatch();
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
        <span className="price">{price}</span>
      </div>
      <CustomButton
        onClick={() => dispatch(addItem({ id, name, price, imageUrl }))}
      >
        Add to cart
      </CustomButton>
    </div>
  );
}

export default ProductItem;
