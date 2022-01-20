const initialState = {
  cartItems: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "item/addItem": {
      console.log("products", action.payload);
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
