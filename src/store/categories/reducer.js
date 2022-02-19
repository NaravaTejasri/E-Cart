const initialState = {
  list: [],
  products: [],
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case "categories/fetchedCategories": {
      return {
        ...state,
        list: [...action.payload],
      };
    }
    case "categories/fetchedProducts": {
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
