import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddress } from "../../store/orders/action";
import { shippingAddress } from "../../store/orders/selector";
import { selectToken } from "../../store/user/selector";
import CustomButton from "../Button/Button";
import CheckoutSteps from "../Checkout/CheckoutSteps";

export default function ShippingAddressScreen() {
  const navigate = useNavigate();
  const userInfo = useSelector(shippingAddress);
  //console.log(userInfo);
  const token = useSelector(selectToken);
  if (!token) {
    navigate("/login");
  }

  const [fullName, setFullName] = useState(userInfo.fullName);
  const [address, setAddress] = useState(userInfo.address);
  const [city, setCity] = useState(userInfo.city);
  const [postalCode, setPostalCode] = useState(userInfo.postalCode);
  const [country, setCountry] = useState(userInfo.country);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(
      "shipping address",
      fullName,
      address,
      city,
      postalCode,
      country
    );
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    );
    navigate("/payment");
  };

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Shipping Address</h1>
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            placeholder="Enter postal code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label />
          <CustomButton>Continue</CustomButton>
        </div>
      </form>
    </div>
  );
}
