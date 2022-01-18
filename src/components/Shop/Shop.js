import React from "react";

function Shop(props) {
  console.log("props", props);
  return (
    <div className="shop">
      <h3>Shop</h3>
      <div>
        {props.categories.map((category) => {
          return (
            <>
              <div>{category.title}</div>
              <>
                {category.products.map((item) => {
                  return <div>{item.name}</div>;
                })}
              </>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
