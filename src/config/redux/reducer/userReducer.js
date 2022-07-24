const initialState = {
  user: {
    name: "",
    email: "",
  },
  isLoading: false,
  isLogin: false,
};

const userReducer = (state = initialState, action) => {
  // if (action.type === "USER_LOGIN_PENDING") {
  //   return {
  //     ...state,
  //     isLoading: true,
  //   };
  // } else if (action.type === "USER_LOGIN_SUCCESS") {
  //   return {
  //     ...state,
  //     user: action.payload.user,
  //     isLoading: false,
  //     isLogin: true,
  //   };
  // } else {
  //   return state;
  // }

  switch (action.type) {
    case "USER_LOGIN_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
        isLogin: true,
      };
      case "EDIT_PROFILE":
        return {
          ...state,
          user : {...state.user, ...action.payload.profile}
        }
    default:
      return state;
  }
};

export default userReducer;
