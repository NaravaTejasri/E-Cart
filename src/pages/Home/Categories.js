import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Category from "../../components/Category/Category";
import fetchCategories from "../../store/categories/action";
import { selectCategories } from "../../store/categories/selector";

function Categories() {
  const categories = useSelector(selectCategories);
  console.log("categories", categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <div className="homepage">
      <h3>Categories</h3>
      <div className="directory-menu">
        {categories.map((category) => {
          return (
            <Category
              key={category.id}
              id={category.id}
              title={category.title}
              subtitle={category.subtitle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
