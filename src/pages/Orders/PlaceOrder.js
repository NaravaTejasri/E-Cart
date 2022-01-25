import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../../components/Checkout/CheckoutSteps";
import { selectCartItem } from "../../store/cart/selector";
import "../../styles/placeOrder.styles.scss";

import {
  orderCreate,
  paymentType,
  shippingAddress,
} from "../../store/orders/selector";
import { orderData } from "../../store/orders/action";

export default function PlaceOrder() {
  //const [sdkReady, setSdkReady] = useState(false);
  const navigate = useNavigate();
  const paymentMethod = useSelector(paymentType);
  if (!paymentMethod) {
    navigate("/payment");
  }
  const order = useSelector(orderCreate);
  console.log("order", order.id);
  const shipping = useSelector(shippingAddress);
  const items = useSelector(selectCartItem);
  console.log("The shipping address", shipping);

  useEffect(() => {
    if (order.id !== undefined) {
      navigate(`/order/${order.id}`);
    }
  }, [order.id]);

  const totalPrice = items.reduce(
    (accumulatedQuantity, cartItems) =>
      accumulatedQuantity + cartItems.quantity * cartItems.price,
    0
  );

  const dispatch = useDispatch();
  function placeOrderHandler() {
    console.log("in function");
    dispatch(orderData(totalPrice, shipping, paymentMethod, items));
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
                  {paymentMethod}
                  <br />
                </p>
              </div>
            </li>

            <li>
              <div className="card card-body">
                <h2>Order Items</h2>
                <ul>
                  {items.map((item) => {
                    //console.log("each item", item);
                    return (
                      <li key={item.id}>
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
                    );
                  })}
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
