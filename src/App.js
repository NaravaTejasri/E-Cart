import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Categories from "./pages/Home/Categories";
import Products from "./pages/Products/Products";
import ShopPreview from "./pages/Shop/ShopPreview";
import Header from "./components/Navigation/Header";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Categories />} />
        <Route path="/shop" element={<ShopPreview />} />
        <Route path="/categories/:id" element={<Products />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
