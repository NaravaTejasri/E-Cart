import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CheckoutSteps from "../../components/Checkout/CheckoutSteps";
import { selectCartItem } from "../../store/cart/selector";
import "../../styles/placeOrder.styles.scss";

import { paymentMethod, shippingAddress } from "../../store/orders/selector";

export default function PlaceOrder() {
  const paymentType = useSelector(paymentMethod);
  //console.log("paytype", paymentType);
  const shipping = useSelector(shippingAddress);
  const items = useSelector(selectCartItem);
  const navigate = useNavigate();

  const totalPrice = items.reduce(
    (accumulatedQuantity, cartItems) =>
      accumulatedQuantity + cartItems.quantity * cartItems.price,
    0
  );

  useEffect(() => {
    if (!paymentType) {
      navigate("/payment");
    }
  }, []);

  function placeOrderHandler() {
    console.log("in function");
  }

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="grid-container">
        <div className="orders">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong>
                  {shipping.fullName} <br />
                  <strong>Address: </strong>
                  {shipping.address}, {shipping.city}, {shipping.postalCode},{" "}
                  {shipping.country}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong>
                  {paymentType}
                  <br />
                </p>
              </div>
            </li>

            <li>
              <div className="card card-body">
                <h2>Order Items</h2>
                <ul>
                  {items.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">{item.name}</div>
                        <div>
                          {item.quantity} x {item.price} =
                          {item.quantity * item.price}€
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="summary">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row ">
                  <h3>Total:</h3>
                  <p>{totalPrice}€</p>
                </div>
              </li>
              <button
                type="button"
                onClick={placeOrderHandler}
                disabled={items.length === 0}
              >
                Place Order
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
