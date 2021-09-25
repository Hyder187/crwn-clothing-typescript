import ShopActionTypes from "./shop.types";
import { IAction } from "./shop.interfaces";
import { Collections } from "./shop.interfaces";

const INITIAL_STATE: Collections = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (
  state: Collections = INITIAL_STATE,
  action: IAction
): Collections => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      if (typeof action.payload !== "string")
        return {
          ...state,
          isFetching: false,
          collections: action.payload,
        };
      return state;
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      if (typeof action.payload === "string")
        return {
          ...state,
          isFetching: false,
          errorMessage: action.payload,
        };
      return state;
    default:
      return state;
  }
};

export default shopReducer;
