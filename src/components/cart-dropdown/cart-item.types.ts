import { Items } from "../collections-overview/collection.types";

export interface cartItem extends Items {
  quantity: number;
}
