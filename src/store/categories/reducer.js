const initialState = {
  list: [],
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case "categories/fetchedCategories": {
      console.log("category action", action.payload);
      return {
        ...state,
        list: [...action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
