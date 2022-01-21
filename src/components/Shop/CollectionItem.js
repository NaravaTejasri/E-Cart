import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cart/action";
import CustomButton from "../Button/Button";

const CollectionItem = ({ item }) => {
  const { id, name, price, imageUrl } = item;
  const dispatch = useDispatch();

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}€</span>
      </div>

      <CustomButton
        onClick={() => dispatch(addItem({ id, name, price, imageUrl }))}
      >
        Add to Cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;

/* import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cart/action";
import "../../styles/shop.styles.scss";
import CustomButton from "../Button/Button";

function Shop(props) {
  const dispatch = useDispatch();

  return (
    <div className="collection-preview">
      {props.categories.map((category) => {
        return (
          <div>
            <h1 className="title">{category.title}</h1>
            <div className="preview">
              {category.products
                .filter((item, index) => index < 4)
                .map((item) => {
                  return (
                    <div className="collection-item">
                      <div
                        className="image"
                        style={{
                          backgroundImage: `url(${item.imageUrl})`,
                        }}
                      />
                      <div className="collection-footer">
                        <span className="name">{item.name}</span>
                        <span className="price">{item.price}€</span>
                      </div>
                      <CustomButton>Add to Cart</CustomButton>
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}
    </div> //main div
  );
}

export default Shop; */
