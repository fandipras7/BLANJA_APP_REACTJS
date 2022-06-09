const initialState = {
  search: "",
  searchParams: {},
  isSearching: false,
};

const searchReducer = (state = initialState, action) => {
  if (action.type === "SEARCHING_PRODUCT") {
    return {
      search: action.payload.keyword,
      searchParams: action.payload.searchParams,
      isSearching: true,
    };
  } else {
    return state;
  }
};

export default searchReducer;
