const initialState = {
  list: [],
  products: [],
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case "categories/fetchedCategories": {
      //console.log("category action", action.payload);
      return {
        ...state,
        list: [...action.payload],
      };
    }
    case "categories/fetchedProducts": {
      console.log("products action", action.payload);
      return {
        ...state,
        products: [...action.payload],
      };
    }
    //Admin part
    case "categories/newfetchedCategory": {
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    }
    case "categories/fetchedUpdatedCategory": {
      console.log("updated category action", action.payload);
      return {
        ...state,
        list: [
          action.payload,
          ...state.list.filter((cat) => cat.id !== action.payload.id),
        ],
      };
    }
    case "categories/deletedCategory":
      const categoryId = action.payload;
      //console.log("id", categoryId);
      const newCategory = state.list.filter(
        (category) => category.id !== categoryId
      );
      return {
        ...state,
        list: [...newCategory],
      };
    default: {
      return state;
    }
  }
}
