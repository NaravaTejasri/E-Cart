import React from "react";
import { Link, NavLink } from "react-router-dom";

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
      </div>
    </div>
  );
}

export default Category;
