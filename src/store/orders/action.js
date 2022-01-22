export const saveShippingAddress = (data) => ({
  type: "orders/orderShipingAddress",
  payload: data,
});

export const paymentMethod = (data) => ({
  type: "orders/payMethod",
  payload: data,
});
