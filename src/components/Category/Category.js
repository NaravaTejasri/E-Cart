import React from "react";

function Category(props) {
  const { title, subtitle } = props;
  return (
    <div className="menu-item">
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
}

export default Category;
