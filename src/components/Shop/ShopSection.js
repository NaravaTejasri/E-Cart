import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/selector";
import "../../styles/shop.styles.scss";
import CollectionItem from "./CollectionItem";

function ShopSection(props) {
  /* const [hats, setHats] = useState(false);
  const [women, setWomen] = useState(false);
  const [men, setMen] = useState(false);
  const [sneakers, setSneakers] = useState(false);
  const [jackets, setJackets] = useState(false); */

  const { categories } = props;

  /* function submitHandler() {
    console.log("values", hats, women);
    const filteredItems = category.filter((item) => item.title === "hats");
    console.log(filteredItems);
    return filteredItems;
  } */

  return (
    <div className="collection-preview">
      {/* <form onChange={submitHandler}>
        <input
          type="checkbox"
          value={hats}
          onChange={(e) => setHats(e.target.checked)}
        />
        <label>HATS</label>
        <br />
        <input
          type="checkbox"
          value={sneakers}
          onChange={(e) => setSneakers(e.target.checked)}
        />
        <label for="vehicle2">SNEAKERS</label>
        <br />
        <input
          type="checkbox"
          value={women}
          onChange={(e) => setWomen(e.target.checked)}
        />
        <label for="vehicle3">WOMEN</label>
        <br />
        <input
          type="checkbox"
          value={men}
          onChange={(e) => setMen(e.target.checked)}
        />
        <label for="vehicle3">MEN</label>
        <br />
        <input
          type="checkbox"
          value={jackets}
          onChange={(e) => setJackets(e.target.checked)}
        />
        <label for="vehicle3">JACKETS</label>
      </form> */}

      {categories.map((category) => {
        return (
          <div key={category.id}>
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

export default ShopSection;
