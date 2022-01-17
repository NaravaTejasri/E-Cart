import React from "react";

function Category(props) {
  const { title, subtitle } = props;
  return (
    <div className="menu-item">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

export default Category;
