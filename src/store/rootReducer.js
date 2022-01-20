import { combineReducers } from "redux";
import cartReducer from "./cart/reducer";
import categoryReducer from "./categories/reducer";
import userReducer from "./user/reducer";

export default combineReducers({
  categories: categoryReducer,
  user: userReducer,
  cart: cartReducer,
});
