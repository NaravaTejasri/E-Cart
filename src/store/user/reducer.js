const initialState = {
  name: null,
  email: null,
  isAdmin: localStorage.getItem("isAdmin"),
  token: localStorage.getItem("token"),
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "user/loginSuccess": {
      console.log("user action", action.payload);
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("isAdmin", action.payload.isAdmin);
      return { ...state, ...action.payload };
    }

    case "user/userLogout": {
      console.log("user action", action.payload);
      localStorage.removeItem("token");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("shippingAddress");
      return { ...initialState, token: null, isAdmin: null };
    }

    default: {
      return state;
    }
  }
}
