import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/homepage.styles.scss";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../store/categories/action";
import { selectProducts } from "../../store/categories/selector";

function Products() {
  const { id } = useParams();
  const products = useSelector(selectProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts(id));
  }, [dispatch, id]);

  return (
    <div className="product page">
      <h3>Products</h3>
      {products.map((product) => {
        return (
          <div key={product.id}>
            {product.name}
            {product.price}
            <img src={product.imageUrl} alt={product.name}></img>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
