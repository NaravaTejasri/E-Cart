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
    //Edit
    case "categories/fetchedUpdatedCategory": {
      console.log("updated category action", action.payload);
      return {
        ...state,
        //list: [...action.payload],
        list: [...state.list, ...action.payload],
      };
    }
    case "categories/fetchedProducts": {
      console.log("products action", action.payload);
      return {
        ...state,
        products: [...action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
