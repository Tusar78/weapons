import React from "react";
import Cart from "../Cart/Cart";

const Navbar = ({ cart }) => {
  console.log(cart);
  return (
    <div className="navigation">
      <nav className="nav">
        <a href="#home" className="nav__logo">
          Weapons
        </a>

        <Cart cart={cart} />
      </nav>
    </div>
  );
};

export default Navbar;
