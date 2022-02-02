import React from "react";
import { Link } from "react-router-dom";

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
        <Link to={`/categories/${props.id}`}>
          <h1 className="title">{title}</h1>
        </Link>
        <span className="subtitle">{subtitle}</span>
        <Link to={`/category/${props.id}`}>
          <button
            style={{
              padding: 5,
              width: 50,
            }}
          >
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Category;
