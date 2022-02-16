import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateCategory } from "../../store/categories/action";
import { selectCategories } from "../../store/categories/selector";
import "../../styles/login.styles.scss";

function UpdateCategory() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("id", id);

  const category = useSelector(selectCategories);
  console.log("categories", category);

  const [title, setTitle] = useState(category.title);
  const [subtitle, setsubTitle] = useState(category.subtitle);
  const [imageUrl, setImageUrl] = useState(category.imageUrl);
  console.log("title", title);

  function submitForm(event) {
    event.preventDefault();
    console.log(id, title, subtitle, imageUrl);
    dispatch(updateCategory(id, title, subtitle, imageUrl));
    navigate("/");
  }

  return (
    <div className="sign-in">
      <div className="container">
        <h3>Edit category</h3>
        <form className="form">
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="title name"
            required
          />
          <input
            type="text"
            value={subtitle}
            onChange={(event) => setsubTitle(event.target.value)}
            placeholder="subtitle"
            required
          />
          <input
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
            type="text"
            placeholder="https://"
            required
          ></input>
          <button type="submit" class="btn" onClick={submitForm}>
            update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateCategory;
