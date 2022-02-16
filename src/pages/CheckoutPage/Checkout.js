import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomButton from "../../components/Button/Button";
import CheckoutItem from "../../components/Checkout/CheckoutItem";

import { selectCartItem } from "../../store/cart/selector";
import "../../styles/checkout.styles.scss";

function Checkout() {
  const calculateTotal = (arrayItems) => {
    return arrayItems.reduce(
      (accumulatedQuantity, cartItems) =>
        accumulatedQuantity + cartItems.quantity * cartItems.price,
      0
    );
  };
  // const initialState = {
  //   shippingAddress: "",
  //   paymentMethod: "",
  //   items: useSelector(selectCartItem),
  //   totalPrice: null,
  // };

  // const [orderDetails, setOrderDetails] = useState(initialState);
  const items = useSelector(selectCartItem);
  const totalPrice = calculateTotal(items);
  // useEffect(() => {
  //   if (orderDetails.items.length)
  //     setOrderDetails({
  //       ...orderDetails,
  //       totalPrice: calculateTotal(orderDetails.items),
  //     });
  // }, []);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {items.map((item) => {
        return <CheckoutItem key={item.id} item={item} />;
      })}
      <div className="total">TOTAL:{totalPrice}€</div>
      {items.length ? (
        <Link to="/shipping">
          <CustomButton>Proceed to Checkout</CustomButton>
        </Link>
      ) : (
        <div>
          <p> 🙇🏻 No items in your Cart 🙇🏻</p>
          <Link to="/">
            <h2> Go shopping 💃🏻</h2>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Checkout;
