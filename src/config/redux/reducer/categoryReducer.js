const initialState = {
  getData: false,
  category: [],
};

const categoryReducer = (state = initialState, action) => {
  if (action.type === "GET_CATEGORY_PENDING") {
    return {
      ...state,
    };
  } else if (action.type === "GET_CATEGORY_SUCCESS") {
    return {
      ...state,
      category: action.payload.category,
      getData: true,
    };
  } else {
    return state;
  }
};

export default categoryReducer;
