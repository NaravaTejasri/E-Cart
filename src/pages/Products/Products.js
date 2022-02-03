import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useParams } from "react-router-dom";
import { fetchProducts } from "../../store/categories/action";
import { selectProducts } from "../../store/categories/selector";
import ProductItem from "../../components/Product/ProductItem";
import "../../styles/product.styles.scss";

function Products() {
  const [sortBy, setSortby] = useState("price");
  const { id } = useParams();
  const products = useSelector(selectProducts);
  //console.log("products page", products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts(id));
  }, [dispatch, id]);

  //sorting part
  const compareByPrice = (a, b) => b.price - a.price;
  const compareByLowPrice = (a, b) => a.price - b.price;
  //console.log("houses", houses);
  const sortedProducts =
    sortBy === "price"
      ? [...products].sort(compareByPrice)
      : [...products].sort(compareByLowPrice);

  const changeSorting = (event) => {
    setSortby(event.target.value);
  };

  return (
    <div className="product-page">
      {/*  <Link to={`/product/${id}`}>
        <button>Create</button>
      </Link> */}

      <div className="sorting">
        <select className="sorting" onChange={changeSorting}>
          <option value="price">High to Low</option>
          <option value="lowPrice">Low to High</option>
        </select>
      </div>

      <div className="items">
        {sortedProducts.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
