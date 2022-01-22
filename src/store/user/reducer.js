const initialState = {
  name: null,
  email: null,
  token: localStorage.getItem("token"),
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "user/loginSuccess": {
      console.log("user action", action.payload);
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };
    }

    case "user/userLogout": {
      localStorage.removeItem("token");
      localStorage.removeItem("shippingAddress");
      return { ...initialState, token: null };
    }

    default: {
      return state;
    }
  }
}
