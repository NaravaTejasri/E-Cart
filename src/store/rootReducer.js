import { combineReducers } from "redux";
import categoryReducer from "./categories/reducer";

export default combineReducers({
  categories: categoryReducer,
});
