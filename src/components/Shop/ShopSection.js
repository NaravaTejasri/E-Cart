import React from "react";
import "../../styles/shop.styles.scss";
import CustomButton from "../Button/Button";

function Shop(props) {
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

export default Shop;
