import React from "react";
import "../../styles/shop.styles.scss";
import CollectionItem from "./CollectionItem";

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
                  return <CollectionItem key={item.id} item={item} />;
                })}
            </div>
          </div>
        );
      })}
    </div> //main div
  );
}

export default Shop;
