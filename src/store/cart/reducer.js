const initialState = {
  cartItems: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "item/addItem": {
      const product = action.payload;
      const existingCartItem = state.cartItems.find((item) => {
        /*  console.log("item", item);
        console.log(
          `is ${item.id} equal ${product.id}`,
          item.id === product.id
        ); */
        return item.id === product.id;
      }); // check whether the item is there or not

      //console.log("existing item", existingCartItem);

      const updatedItem = existingCartItem
        ? { ...existingCartItem, quantity: existingCartItem.quantity + 1 }
        : null; // copy existing item and add quantity to the exisiting item

      const updatedCart = updatedItem
        ? state.cartItems.map((item) => {
            if (parseInt(item.id) === updatedItem.id) {
              return updatedItem;
            } else {
              return item;
            }
          })
        : [...state.cartItems, { ...action.payload, quantity: 1 }];

      const newState = {
        ...state,
        cartItems: [...updatedCart],
      };

      return newState;
    }

    default: {
      return state;
    }
  }
}
