import { apiUrl } from "../../config/constants";
import axios from "axios";

export const fetchedCategoriesSuccess = (data) => ({
  type: "categories/fetchedCategories",
  payload: data,
});

export const fetchedProductsSuccess = (data) => ({
  type: "categories/fetchedProducts",
  payload: data,
});

//get all the categories
export const fetchCategories = () => {
  return async (dispatch, getState) => {
    try {
      const category = await axios.get(`${apiUrl}/categories`);
      //console.log("Hiiii", category.data);
      dispatch(fetchedCategoriesSuccess(category.data.categories));
    } catch (e) {
      console.log(e.message);
    }
  };
};
//export default fetchCategories;

//get all the products of particular category
export const fetchProducts = (id) => {
  return async (dispatch, getState) => {
    try {
      const res = await axios.get(`${apiUrl}/categories/${id}`);
      console.log(res.data.categories.products);
      dispatch(fetchedProductsSuccess(res.data.categories.products));
    } catch (e) {
      console.log(e);
    }
  };
};
