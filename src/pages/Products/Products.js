import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { fetchProducts } from "../../store/categories/action";
import { selectProducts } from "../../store/categories/selector";
import ProductItem from "../../components/Product/ProductItem";
import "../../styles/product.styles.scss";

function Products() {
  const { id } = useParams();
  const products = useSelector(selectProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts(id));
  }, [dispatch, id]);

  return (
    <div className="product-page">
      <div className="items">
        {products.map((item) => (
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
