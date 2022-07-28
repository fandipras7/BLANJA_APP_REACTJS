const initialState = {
  myTransaction: [],
  isLoading: false,
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TRANSACTION_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_TRANSACTION_SUCCESS":
      return {
        ...state,
        myTransaction: action.payload.myTransaction,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default transactionReducer;
