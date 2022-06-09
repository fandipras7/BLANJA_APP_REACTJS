import { combineReducers } from "redux";
import bagReducer from "./bagReducer";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";
import searchReducer from "./searchReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  search: searchReducer,
  category: categoryReducer,
  bag: bagReducer,
});

export default rootReducer;
