const initialState = {
  user: {
    name: "",
    email: "",
  },
  isLoading: false,
  isLogin: false,
};

const userReducer = (state = initialState, action) => {
  if (action.type === "USER_LOGIN_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "USER_LOGIN_SUCCESS") {
    return {
      ...state,
      user: action.payload.user,
      isLoading: false,
      isLogin: true,
    };
  } else {
    return state;
  }
};

export default userReducer;
