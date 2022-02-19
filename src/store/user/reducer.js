const initialState = {
  name: null,
  email: null,
  isAdmin: localStorage.getItem("isAdmin") === "true",
  token: localStorage.getItem("token"),
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "user/loginSuccess": {
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("isAdmin", action.payload.isAdmin);
      return { ...state, ...action.payload };
    }

    case "user/userLogout": {
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
