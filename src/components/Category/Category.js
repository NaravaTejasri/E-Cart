import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../../store/user/selector";
import { deleteCategory } from "../../store/categories/action";
import { setMessage } from "../../store/appState/actions";

function Category(props) {
  const dispatch = useDispatch();
  const { title, subtitle, imageUrl } = props;
  const { isAdmin } = useSelector(selectUser);
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

        {isAdmin ? (
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
        ) : null}
        {isAdmin ? (
          <button
            className="button"
            onClick={() => {
              let result = window.confirm(
                "Are you sure you want to delete this item?"
              );
              if (result) {
                //Logic to delete the item
                dispatch(deleteCategory(props.id));
              }
            }}
            //onClick={() => dispatch(deleteCategory(props.id))}
            style={{
              padding: 5,
              width: 50,
              margin: 5,
            }}
          >
            Delete
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Category;
