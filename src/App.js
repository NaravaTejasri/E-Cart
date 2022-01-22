import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Categories from "./pages/Home/Categories";
import Products from "./pages/Products/Products";
import ShopPreview from "./pages/Shop/ShopPreview";
import Header from "./components/Navigation/Header";
import Login from "./pages/Login/Login";
import SignupPage from "./pages/Signup/SignupPage";
import Checkout from "./pages/CheckoutPage/Checkout";
import ShippingAddressScreen from "./components/Orders/ShippingAddress";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Categories />} />
        <Route path="/shop" element={<ShopPreview />} />
        <Route path="/categories/:id" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shipping" element={<ShippingAddressScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userSignup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
