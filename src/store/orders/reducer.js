const initialState = {
  shippingAddress: localStorage.getItem("shippingAddress"),
  payment: "PayPal",
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case "orders/orderShipingAddress": {
      console.log("order action", action.payload);
      localStorage.setItem("shippingAddress", action.payload);
      return {
        ...state,
        shippingAddress: action.payload,
      };
    }
    case "orders/payMethod": {
      console.log("payment action", action.payload);

      return {
        ...state,
        payment: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
