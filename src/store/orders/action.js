import axios from "axios";
import { apiUrl } from "../../config/constants";

import {
  appDoneLoading,
  appLoading,
  setMessage,
  showMessageWithTimeout,
} from "../appState/actions";
import { emptyCart } from "../cart/action";
import { selectUser } from "../user/selector";

export const saveShippingAddress = (data) => ({
  type: "orders/orderShipingAddress",
  payload: data,
});

export const payments = (data) => ({
  type: "orders/payMethod",
  payload: data,
});

export const orderDetails = (data) => ({
  type: "orders/userOrderDetails",
  payload: data,
});

export const orderData = (total, shippingAddress, paymentMethod, items) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    //console.log("order", total, shippingAddress, paymentMethod, items);
    const user = selectUser(getState());
    try {
      const response = await axios.post(
        `${apiUrl}/orders/`,
        {
          total,
          shippingAddress,
          paymentMethod,
          items,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      console.log("user orders data", response.data.order);
      dispatch(orderDetails(response.data.order));
      dispatch(emptyCart());
      //localStorage.removeItem("cartItems")
      dispatch(showMessageWithTimeout("success", true, "order created"));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log(error);
      if (error.response) {
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};
