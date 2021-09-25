import { createSelector } from "reselect";
import { Collections } from "./shop.interfaces";
import { IRoot } from "../root-reducer";

const selectShop = (state: IRoot): Collections => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => (collections ? collections : [])
);

export const selectCollection = (collectionUrlParam: number) =>
  createSelector([selectCollections], (collections) => {
    if (typeof collectionUrlParam)
      return collections ? collections[collectionUrlParam] : null;
  });

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
