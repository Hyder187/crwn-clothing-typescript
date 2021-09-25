import React from "react";
import { ICartITem } from "../../redux/cart/cart.intefaces";

import "./cart-item.styles.scss";
import { cartItem } from "../cart-dropdown/cart-item.types";

type cartItemProp = {
  item: ICartITem;
};

const CartItem = ({ item }: cartItemProp) => (
  <div className="cart-item">
    <img src={item.imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{item.name}</span>
      <span className="price">
        {item.quantity} x ${item.price}
      </span>
    </div>
  </div>
);

export default CartItem;
