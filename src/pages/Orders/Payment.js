import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../../components/Checkout/CheckoutSteps";
import { payments } from "../../store/orders/action";
import { shippingAddress } from "../../store/orders/selector";
import "../../styles/payment.styles.scss";

export default function PaymentMethod(props) {
  const [payment, setPaymentMethod] = useState("PayPal");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const shipping = useSelector(shippingAddress);
  // console.log("shipping", shipping);

  useEffect(() => {
    if (!shipping) {
      navigate("/shipping");
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    //console.log("pament", payment);
    dispatch(payments(payment));
    navigate("/placeorder");
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="payment form" onSubmit={submitHandler}>
        <div>
          <h1>Payment Method</h1>
        </div>
        <div>
          <div>
            <label htmlFor="paypal">PayPal</label>
            <input
              type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="stripe">Stripe</label>
            <input
              type="radio"
              id="stripe"
              value="Stripe"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
          </div>
          <div>
            <button>Continue</button>
          </div>
        </div>
      </form>
    </div>
  );
}
