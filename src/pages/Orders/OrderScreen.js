import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderCreate } from "../../store/orders/selector";
import "../../styles/placeOrder.styles.scss";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { showMessageWithTimeout } from "../../store/appState/actions";
import { useNavigate } from "react-router-dom";
import { config } from "../../config";

export default function Orderscreen() {
  const order = useSelector(orderCreate);
  //console.log("order", order);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //payment
  //const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "orders",
            amount: {
              currency_code: "EUR",
              value: `${order.total}`,
            },
          },
        ],
        // not needed if a shipping address is actually needed
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      console.log("payer is:", payer);
      setSuccess(true);

      dispatch(
        showMessageWithTimeout(
          "success",
          true,
          ` Thank you for your purchase!, Your paypent ref. is: ${order.id}`,
          3000
        )
      );
    });
  };

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };
  console.log("onError", onError);

  useEffect(() => {
    if (success) {
      alert("Payment successful!!");
      //history.push("/");
      navigate("/");
    }
  }, [success, navigate]);

  console.log(1, orderID);
  console.log(2, success);
  console.log(3, ErrorMessage);

  return (
    <div>
      <div className="grid-container">
        <div className="orders">
          <h1>Order Id: {order.id}</h1>
          <ul>
            <li>
              <div className="card card-body">
                <h2>Shipping</h2>
                <p>
                  {order.shippingAddress} <br />
                </p>
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
                  <p>{order.total}???</p>
                </div>
              </li>
              {order.id ? (
                <PayPalScriptProvider
                  options={{
                    "client-id": config.paypalClient,
                    currency: "EUR",
                  }}
                >
                  <PayPalButtons
                    style={{
                      layout: "horizontal",
                      shape: "pill",
                      label: "pay",
                      tagline: "false",
                      height: 50,
                    }}
                    createOrder={createOrder}
                    onApprove={onApprove}
                  />
                </PayPalScriptProvider>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
