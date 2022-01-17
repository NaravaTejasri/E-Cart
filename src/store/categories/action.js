import { apiUrl } from "../../config/constants";
import axios from "axios";

export const fetchedCategoriesSuccess = (data) => ({
  type: "categories/fetchedCategories",
  payload: data,
});

const fetchCategories = () => {
  return async (dispatch, getState) => {
    try {
      const category = await axios.get(`${apiUrl}/categories`);
      console.log("Hiiii", category.data);
      dispatch(fetchedCategoriesSuccess(category.data.categories));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export default fetchCategories;
