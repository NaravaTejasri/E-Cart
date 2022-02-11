import { combineReducers } from "redux";
import appState from "./appState/reducer";
import cartReducer from "./cart/reducer";
import categoryReducer from "./categories/reducer";
import orderReducer from "./orders/reducer";
import userReducer from "./user/reducer";

export default combineReducers({
  appState,
  categories: categoryReducer,
  user: userReducer,
  cart: cartReducer,
  orders: orderReducer,
});
