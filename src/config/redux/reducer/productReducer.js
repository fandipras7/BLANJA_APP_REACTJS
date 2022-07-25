const initialState = {
  product: [],
  pagination: {
    currentPage: 0,
    limit: 0,
    totalData: 0,
    totalPage: 0,
  },
  isLoading: false,
  detailProduct: [],
};

const productReducer = (state = initialState, action) => {
  //   if (action.type === "GET_DATA_PENDING") {
  //     return {
  //       ...state,
  //       isGeting: true,
  //     };
  //   } else
  // if (action.type === "GET_DATA_SUCCESS") {
  //   return {
  //     ...state,
  //     product: [...action.payload.product],
  //     isGeting: true,
  //   };
  // } else if (action.type === "ADD_PRODUCT") {
  //   return {
  //     ...state,
  //     product: [...state.product, action.payload.product],
  //   };
  // } else if (action.type === "EDIT_PRODUCT") {
  //   return {
  //     ...state,
  //     product: state.product.map((item) => {
  //       return item.id === action.payload.product.id ? action.payload.product : item;
  //     }),
  //   };
  // } else if (action.type === "DELETE_PRODUCT") {
  //   return {
  //     ...state,
  //     product: state.product.filter((item) => {
  //       return item.id !== action.payload.id;
  //     }),
  //   };
  // } else if (action.type === "GET_DETAIL_SUCCESS") {
  //   return {
  //     ...state,
  //     detailProduct: action.payload.product,
  //   };
  // } else {
  //   return state;
  // }

  switch (action.type) {
    case "GET_DATA_PENDING":
      return {
        ...state,
        isLoading: true
      }
    case "GET_DATA_SUCCESS":
      return {
        ...state,
        product: action.payload.product,
        pagination: action.payload.pagination,
        isLoading:false
      }
      case "GET_DETAIL_PENDING":
        return {
          ...state,
          isLoading: true
        }
      case "GET_DETAIL_SUCCESS":
        return {
          ...state,
          detailProduct: action.payload.product,
          isLoading: false
        }
      default:
        return state
  }
};

export default productReducer;
