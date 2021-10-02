import { ActionTypes } from "../constants/action-types";

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
export const singleItemReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SINGLE_ITEM:
      return { ...state, ...payload };
    default:
      return state;
  }
};
