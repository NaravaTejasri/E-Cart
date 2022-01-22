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

    //remove item from the cart
    case "item/removeItem": {
      console.log(" item removed action", action.payload);
      const product = action.payload;
      const existingCartItem = state.cartItems.find((item) => {
        return item.id === product.id;
      }); // check whether the item is there or not

      const updatedItem = existingCartItem
        ? { ...existingCartItem, quantity: existingCartItem.quantity - 1 }
        : null; // copy existing item and remove quantity to the exisiting item

      const updatedCart =
        updatedItem && updatedItem.quantity > 0
          ? state.cartItems.map((item) => {
              if (parseInt(item.id) === updatedItem.id) {
                return updatedItem;
              } else {
                return item;
              }
            })
          : updatedItem && updatedItem.quantity <= 0
          ? state.cartItems.filter((item) => {
              /*console.log("item", item);
              console.log(
                `is ${item.id} not equal ${product.id}`,
                item.id !== product.id
              ); */ //here 3 is not equal to 3 - false - removed - filter - true - returns items
              return item.id !== product.id;
            })
          : state;

      const newState = {
        ...state,
        cartItems: [...updatedCart],
      };

      return newState;
    }

    //delete the item in the cart
    case "item/deleteItem": {
      console.log("delete item action", action.payload);
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    } //condition matches filter return true  - true - remove item - 1===1 - true

    default: {
      return state;
    }
  }
}
