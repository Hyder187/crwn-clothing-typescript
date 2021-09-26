import React from "react";
import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { selectCartItems } from "../../redux/cart/cart.selector";
// import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { cartItem } from "./cart-item.types";
import CustomButton from "../custom-button/custom-button.component";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router";

const CartDropdown = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
