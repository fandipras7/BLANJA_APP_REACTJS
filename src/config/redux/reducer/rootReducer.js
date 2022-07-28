import { combineReducers } from "redux";
import bagReducer from "./bagReducer";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";
import searchReducer from "./searchReducer";
import userReducer from "./userReducer";
import transactionReducer from "./transactionReducer";

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  search: searchReducer,
  category: categoryReducer,
  bag: bagReducer,
  order: transactionReducer

});

export default rootReducer;
