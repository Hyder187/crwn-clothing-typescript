import UserActionTypes from "./user.types";
import { IUserAction, IUserState } from "./user.interaces";

const INITIAL_STATE: IUserState = {
  currentUser: null,
  error: null,
};

const userReducer = (
  state = INITIAL_STATE,
  action: IUserAction
): IUserState => {
  switch (action.type) {
    case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
    case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
      if (typeof action.payload !== "string")
        return {
          ...state,
          currentUser: action.payload,
          error: null,
        };
      return state;
    case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
    case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
      if (typeof action.payload === "string")
        return {
          ...state,
          error: action.payload,
        };
      return state;
    case UserActionTypes.SIGN_UP_SUCCESS:
      if (typeof action.payload !== "string")
        return {
          ...state,
          currentUser: action.payload,
          error: null,
        };
      return state;
    case UserActionTypes.SIGN_UP_FAILURE:
      if (typeof action.payload === "string")
        return {
          ...state,
          error: action.payload,
        };
      return state;
    case UserActionTypes.SIGN_OUT_FAILURE:
      if (typeof action.payload === "string")
        return {
          ...state,
          error: action.payload,
        };
      return state;
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };

    default:
      return state;
  }
};

export default userReducer;
