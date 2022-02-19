const initialState = {
  shippingAddress: localStorage.getItem("shippingAddress"),
  payment: "",
  order: {},
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case "orders/orderShipingAddress": {
      localStorage.setItem("shippingAddress", action.payload);
      return {
        ...state,
        shippingAddress: action.payload,
      };
    }
    case "orders/payMethod": {
      return {
        ...state,
        payment: action.payload,
      };
    }

    case "orders/userOrderDetails": {
      return {
        ...state,
        order: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
