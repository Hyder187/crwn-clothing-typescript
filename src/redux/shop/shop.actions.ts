import ShopActionTypes from "./shop.types";
import { ICollection } from "./shop.interfaces";
import { firestore } from "../../firebase/firebase.utils";
import { getDocs, collection } from "@firebase/firestore";
import { convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { Dispatch } from "react";
import { IAction } from "./shop.interfaces";
import { ThunkDispatch } from "redux-thunk";
import { Collection } from "../../components/collections-overview/collection.types";
import { IRoot } from "../root-reducer";

export const fetchCollectionsStart = () => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
    payload: "",
  };
};

export const fetchCollectionsSuccess = (collectionsArray: ICollection[]) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsArray,
});

export const fetchCollectionsFailure = (errorMessage: string) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch: ThunkDispatch<IRoot, void, IAction>) => {
    const collectionRef = collection(firestore, "collections");
    dispatch(fetchCollectionsStart());

    getDocs(collectionRef)
      .then((snapShot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => fetchCollectionsFailure(error.message));
  };
};
