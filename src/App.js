import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Categories from "./pages/Home/Categories";
import Products from "./pages/Products/Products";
import ShopPreview from "./pages/Shop/ShopPreview";

function App() {
  return (
    <div className="App">
      <h1>E-Cart</h1>
      <Routes>
        <Route exact path="/" element={<Categories />} />
        <Route path="/shop" element={<ShopPreview />} />
        <Route path="/categories/:id" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
