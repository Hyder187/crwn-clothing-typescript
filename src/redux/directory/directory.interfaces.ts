export interface ISectionType {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: "large" | "small";
}

export interface IPropType {
  sections: ISectionType[];
}

export interface IDirectoryAction {
  type: string;
}

export interface IDirectoryState {
  sections: ISectionType[];
}
