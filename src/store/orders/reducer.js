const initialState = {
  shippingAddress: localStorage.getItem("shippingAddress"),
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
    default: {
      return state;
    }
  }
}
