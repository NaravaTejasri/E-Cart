import { combineReducers } from "redux";
import categoryReducer from "./categories/reducer";
import userReducer from "./user/reducer";

export default combineReducers({
  categories: categoryReducer,
  user: userReducer,
});
