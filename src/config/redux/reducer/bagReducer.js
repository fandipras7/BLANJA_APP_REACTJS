const initialState = {
  mycart: [],
  isLoading: false
  // totalPrice: 0,
};

const bagReducer = (state = initialState, action) => {
  // if (action.type === "GET_PRODUCT_BAG") {
  //   return {
  //     ...state,
  //   };
  // } else if (action.type === "ADD_BAG") {
  //   if (state.product.length > 0) {
  //     console.log("apakah ini jalan");
  //     // const produkDua = state.product.map((item) => {
  //     //   // return item.id === action.payload.data.id ? { ...item, qtyOrder: item.qtyOrder + 1 } : {...action.payload.data, qtyOrder:1}
  //     //   if(item.id === action.payload.data.id){
  //     //     item.id.qtyOrder++
  //     //   }
  //     //   return [...item]
  //     // });
  //     // console.log(produkDua.length);
  //     // const productTest = []
  //     let data = [];
  //     for (let item of state.product) {
  //       if (item.id === action.payload.data.id) {
  //         console.log(data.id);
  //         state.product.qtyOrder++;
  //       } else {
  //         if (item.id !== action.payload.data.id) {
  //           data = [...state.product, action.payload.data];
  //         }
  //       }
  //     }
  //     console.log(data);
  //     for (let i = 0; i < state.product.length; i++) {
  //       // console.log(state.product.length);
  //       // console.log(state.product[i].id);
  //       // console.log(action.payload.data.id);
  //       if (state.product[i].id === action.payload.data.id) {
  //         // console.log(state.product[i].id);
  //         // console.log(action.payload.data.id);
  //         state.product[i].qtyOrder++;
  //         return {
  //           ...state,
  //           product: [...state.product],
  //         };
  //       } else {
  //         return {
  //           ...state,
  //           product: [...state.product, { ...action.payload.data, qtyOrder: 1 }],
  //         };
  //       }
  //     }
  //     // return {
  //     //   ...state,
  //     //   product: state.product.map((item) => {
  //     //     return item.id === produkDua.id && produkDua;
  //     //   }),
  //     // };
  //   } else {
  //     return {
  //       ...state,
  //       product: [...state.product, { ...action.payload.data, qtyOrder: 1 }],
  //     };
  //   }
  // } else if (action.type === "PLUS") {
  //   return {
  //     ...state,
  //     product: state.product.map((item) => {
  //       return item.id === action.payload.dataId ? { ...item, qtyOrder: action.payload.dataCount } : { ...item };
  //     }),
  //   };
  // } else if (action.type === "MINUS") {
  //   return {
  //     ...state,
  //     product: state.product.map((item) => {
  //       return item.id === action.payload.dataId ? { ...item, qtyOrder: action.payload.dataCount } : { ...item };
  //     }),
  //   };
  // } else if (action.type === "REMOVE") {
  //   return {
  //     ...state,
  //     product: state.product.filter((item) => {
  //       return item.id !== action.payload;
  //     }),
  //   };
  // } else {
  //   return state;
  // }
  switch (action.type) {
    case "GET_MYCART_PENDING":
      return {
        ...state,
        isLoading: true
      };
      case "GET_MYCART_SUCCESS":
        return {
          ...state,
          mycart: action.payload.cart,
          isLoading: false
        };
        // case "ADD_CART":
        //   return {
        //     ...state,
        //     mycart: action.payload.cart,
        //   };
      default:
        return state
  }
};

export default bagReducer;
