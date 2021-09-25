import { IITems } from "../shop/shop.interfaces";

export interface ICartITem extends IITems {
  quantity: number;
}

export interface ICartCollection {
  hidden: boolean;
  cartItems: ICartITem[];
}

export interface ICartState {
  cart: ICartCollection;
}

export interface ICartAction {
  type: string;
  payload: ICartITem;
}
