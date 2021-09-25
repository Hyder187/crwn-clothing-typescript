import { createSelector } from "reselect";
import { IRoot } from "../root-reducer";

const selectUser = (state: IRoot) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
