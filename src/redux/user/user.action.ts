import UserActionTypes from "./user.types";
import { IUser } from "./user.interaces";
import {
  googleProvider,
  auth,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";

import { signInWithEmailAndPassword } from "@firebase/auth";

import { IUserAction } from "./user.interaces";
import { signInWithPopup } from "@firebase/auth";
import { getDoc } from "firebase/firestore";
import { ThunkDispatch } from "redux-thunk";
import { IRoot } from "../root-reducer";
import { IEmailPassword } from "./user.interaces";

export const setCurrentUser = (user: IUser) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
  payload: "",
});

export const googleSignInSuccess = (user: IUser) => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});

export const googleSignInFailure = (error: string) => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: error,
});

export const emailSignInStart = (emailAndPassword: IEmailPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const emailSignInSuccess = (user: IUser) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user,
});

export const emailSignInFailure = (error: string) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
  payload: error,
});

export function signInWithGoogleAsync() {
  return async (dispatch: ThunkDispatch<IRoot, void, IUserAction>) => {
    try {
      dispatch(googleSignInStart());
      const { user } = await signInWithPopup(auth, googleProvider);
      const userRef = await createUserProfileDocument(user);

      if (!userRef) return;

      const userSnapshot = await getDoc(userRef);

      const userPayload: IUser = userSnapshot.data() as IUser;

      dispatch(googleSignInSuccess(userPayload));
    } catch (error) {
      dispatch(googleSignInFailure("error"));
    }
  };
}

export function signInWithEmail(emailPassword: IEmailPassword) {
  return async (dispatch: ThunkDispatch<IRoot, void, IUserAction>) => {
    try {
      const { email, password } = emailPassword;
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      const userRef = await createUserProfileDocument(user);

      if (!userRef) return;

      const userSnapshot = await getDoc(userRef);

      const userPayload: IUser = userSnapshot.data() as IUser;

      dispatch(emailSignInSuccess(userPayload));
    } catch (error) {
      dispatch(emailSignInFailure("error"));
    }
  };
}

// export const checkUserSession = () => ({
//   type: UserActionTypes.CHECK_USER_SESSION,
// });

// export const signOutStart = () => ({
//   type: UserActionTypes.SIGN_OUT_START,
// });

// export const signOutSuccess = () => ({
//   type: UserActionTypes.SIGN_OUT_SUCCESS,
// });

// export const signOutFailure = (error) => ({
//   type: UserActionTypes.SIGN_OUT_FAILURE,
//   payload: error,
// });

// export const signUpStart = (userCredentials) => ({
//   type: UserActionTypes.SIGN_UP_START,
//   payload: userCredentials,
// });

// export const signUpSuccess = ({ user, additionalData }) => ({
//   type: UserActionTypes.SIGN_UP_SUCCESS,
//   payload: { user, additionalData },
// });

// export const signUpFailure = (error) => ({
//   type: UserActionTypes.SIGN_UP_FAILURE,
//   payload: error,
// });
