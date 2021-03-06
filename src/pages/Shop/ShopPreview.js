import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShopSection from "../../components/Shop/ShopSection";
import { fetchCategories } from "../../store/categories/action";
import { selectCategories } from "../../store/categories/selector";

function ShopPreview() {
  const categories = useSelector(selectCategories);
  //console.log("categories", categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <ShopSection categories={categories} />
    </div>
  );
}

export default ShopPreview;
