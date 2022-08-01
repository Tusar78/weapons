import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";

const Navbar = ({ cart }) => {
  console.log(cart);
  return (
    <div className="navigation">
      <nav className="nav">
        <a href="#home" className="nav__logo">
          Weapons
        </a>

        <div className="cart__btn">
          <BsFillCartPlusFill className="cart__icon" />
          <span className="cart__quantity">{cart.length}</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
