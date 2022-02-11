import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "../user/selector";
import {
  appDoneLoading,
  appLoading,
  showMessageWithTimeout,
} from "../appState/actions";

export const fetchedCategoriesSuccess = (data) => ({
  type: "categories/fetchedCategories",
  payload: data,
});

export const fetchedProductsSuccess = (data) => ({
  type: "categories/fetchedProducts",
  payload: data,
});

//Admin
export const newCategorySuccess = (data) => ({
  type: "categories/newfetchedCategory",
  payload: data,
});

export const updatedCategory = (category) => ({
  type: "categories/fetchedUpdatedCategory",
  payload: category,
});

export const deletedCategory = (category) => ({
  type: "categories/deletedCategory",
  payload: category,
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

//get all the products of particular category
export const fetchProducts = (id) => {
  return async (dispatch, getState) => {
    try {
      const res = await axios.get(`${apiUrl}/categories/${id}`);
      //console.log("product action", res.data.categories.products);
      dispatch(fetchedProductsSuccess(res.data.categories.products));
    } catch (e) {
      console.log(e);
    }
  };
};

//Admin part
//creating new category - Admin
export const createCategory = (title, subtitle, imageUrl) => {
  return async (dispatch, getState) => {
    try {
      // const user = selectUser(getState());
      const token = selectToken(getState());
      const response = await axios.post(
        `${apiUrl}/categories/`,
        {
          title,
          subtitle,
          imageUrl,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("Yep!", response.data);
      dispatch(newCategorySuccess(response.data.category));
      dispatch(
        showMessageWithTimeout(
          "success",
          false,
          "New category created successfully",
          4000
        )
      );
    } catch (e) {
      console.log(e.message);
    }
  };
};

//admin can edit the category
export const updateCategory = (id, title, subtitle, imageUrl) => {
  return async (dispatch, getState) => {
    try {
      //console.log("action", id);
      const token = selectToken(getState());
      const response = await axios.patch(
        `${apiUrl}/categories/${id}`,
        {
          title,
          subtitle,
          imageUrl,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      //console.log("Yep!", response.data.category);
      dispatch(updatedCategory(response.data.category));
      dispatch(
        showMessageWithTimeout(
          "success",
          false,
          "category updated successfully",
          4000
        )
      );
    } catch (e) {
      console.log(e.message);
    }
  };
};

//delete the category
export const deleteCategory = (id) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    console.log(id);
    const token = selectToken(getState());
    try {
      const response = await axios.delete(`${apiUrl}/categories/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      //console.log("Category deleted?", response.data);
      dispatch(deletedCategory(id));
      dispatch(appDoneLoading());
    } catch (e) {
      console.error(e);
    }
  };
};

//Admin can add the product
export const createProduct = (id, name, imageUrl, price) => {
  return async (dispatch, getState) => {
    console.log("hiii", id, name, imageUrl, price);
    try {
      const token = selectToken(getState());
      const response = await axios.post(
        `${apiUrl}/categories/product/${id}`,
        {
          name,
          imageUrl,
          price,
          id,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("Yep!", response.data.product);
      dispatch(fetchedProductsSuccess(response.data.product));
      dispatch(
        showMessageWithTimeout(
          "success",
          false,
          "New category created successfully",
          4000
        )
      );
    } catch (e) {
      console.log(e.message);
    }
  };
};
