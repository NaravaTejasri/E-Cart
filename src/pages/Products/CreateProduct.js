import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createProduct } from "../../store/categories/action";
import "../../styles/login.styles.scss";

function CreateProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("id", id);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "https://source.unsplash.com/1600x900/?"
  );

  function submitForm(event) {
    event.preventDefault();
    console.log(id, name, price, imageUrl);
    dispatch(createProduct(id, name, imageUrl, price));
    navigate("/");
  }

  return (
    <div className="sign-in">
      <div className="container">
        <h3>Create a new product</h3>
        <form className="form">
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="name"
            required
          />
          <input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            placeholder="price"
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

export default CreateProduct;
