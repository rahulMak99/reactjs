import { combineReducers } from "redux";
import { selectedProductsReducer, singleItemReducer } from "./productsReducer";

const reducers = combineReducers({
  product: selectedProductsReducer,
  single: singleItemReducer


});

export default reducers;
