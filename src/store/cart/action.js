//action - adding product(item) to the cart
//adding the quantity - updating quantity of the item
export const addItem = (data) => ({
  type: "item/addItem",
  payload: data,
});

//removing the product(item) quantity: 2 to 1
//decreasing the quantity of the item in the cart
export const removeItem = (data) => ({
  type: "item/removeItem",
  payload: data,
});

//deleting the whole item in the cart
export const clearItem = (data) => ({
  type: "item/deleteItem",
  payload: data,
});

export const emptyCart = () => ({
  type: "item/emptyCart",
});
