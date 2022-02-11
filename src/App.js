import React, { useEffect } from "react";
import "./App.css";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";

import { Routes, Route } from "react-router-dom";
import Categories from "./pages/Home/Categories";
import Products from "./pages/Products/Products";
import ShopPreview from "./pages/Shop/ShopPreview";
import Header from "./components/Navigation/Header";
import Login from "./pages/Login/Login";
import SignupPage from "./pages/Signup/SignupPage";
import Checkout from "./pages/CheckoutPage/Checkout";
import ShippingAddressScreen from "./components/Shipping/ShippingAddress";
import PaymentMethod from "./pages/Orders/Payment";
import PlaceOrder from "./pages/Orders/PlaceOrder";
import OrderScreen from "./pages/Orders/OrderScreen";
import CreateCategory from "./pages/Home/CreateCategory";
import UpdateCategory from "./pages/Home/UpdateCategory";
import CreateProduct from "./pages/Products/CreateProduct";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/action";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Routes>
        <Route exact path="/" element={<Categories />} />
        <Route path="/createCategory" element={<CreateCategory />} />
        <Route path="/category/:id" element={<UpdateCategory />} />
        <Route path="/shop" element={<ShopPreview />} />
        <Route path="/categories/:id" element={<Products />} />
        <Route path="/:id" element={<CreateProduct />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shipping" element={<ShippingAddressScreen />} />
        <Route path="/payment" element={<PaymentMethod />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/order/:id" element={<OrderScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userSignup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
