import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCategory } from "../../store/categories/action";
import "../../styles/login.styles.scss";

function CreateCategory() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [subtitle, setsubTitle] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "https://source.unsplash.com/1600x900/?"
  );

  function submitForm(event) {
    event.preventDefault();
    console.log(title, subtitle, imageUrl);
    dispatch(createCategory(title, subtitle, imageUrl));
    navigate("/");
  }

  return (
    <div className="sign-in">
      <div className="container">
        <h3>Create a new category</h3>
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
            create
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateCategory;
