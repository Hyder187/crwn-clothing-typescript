import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount);

  return (
    <div
      className="cart-icon"
      onClick={() => {
        dispatch(toggleCartHidden());
      }}
    >
      <ShoppingIcon />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
