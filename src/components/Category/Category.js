import React from "react";

function Category(props) {
  const { title, subtitle, imageUrl } = props;
  return (
    <div className=" large menu-item">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
}

export default Category;
