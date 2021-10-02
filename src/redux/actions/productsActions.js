import { ActionTypes } from "../constants/action-types";


export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const singleItem = (item) => {
  return {
    type: ActionTypes.SINGLE_ITEM,
    payload: item,
  };
};



