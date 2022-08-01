import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";

const Cart = ({ cart }) => {
  return (
    <div className="cart__btn">
      <BsFillCartPlusFill className="cart__icon" />
      <span className="cart__quantity">{cart.length}</span>
    </div>
  );
};

export default Cart;
