import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { useSelector } from "react-redux";

const Header = () => {
  const hidden = useSelector(selectCartHidden);
  return (
    <div className="header">
      <div>
        <Logo className="logo"></Logo>
      </div>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {/* { ? (
          <div className='option'>SIGN OUT</div>
        ) : (
          <Link className='option' to="/signin">SIGN IN</Link>
        )} */}

        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;