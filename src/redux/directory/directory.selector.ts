import { createSelector } from "reselect";
import { IDirectoryState } from "./directory.interfaces";
import { IRoot } from "../root-reducer";

const selectDirectory = (state: IRoot): IDirectoryState => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
