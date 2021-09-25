import { type } from "os";

export interface IITems {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}

export interface ICollection {
  routeName: string;
  id: string;
  title: string;
  items: IITems[];
}

export type ICollectionMap = {
  [key: string]: ICollection;
};

export type Collections = {
  collections: ICollection[] | null;
  errorMessage: string | undefined;
  isFetching: boolean;
};

export interface IShopState {
  shop: Collections;
}

export type ICollectionId = "hats" | "sneakers" | "jackets" | "womens" | "mens";

export interface IAction {
  payload: ICollection[] | string;
  type: string;
}
