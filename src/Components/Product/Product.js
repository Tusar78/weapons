import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Product = ({ product, addToCart }) => {
  const { img, category, name, action, bullet, price } = product;
  return (
    <div className="product">
      <img src={img} alt={name} className="product__img" />

      <div className="product__info">
        <span className="product__category">Category: {category}</span>
        <h3 className="product__title">{name}</h3>
        <p className="product__action">{action}</p>
        <p className="product__bullet">Bullet: {bullet}</p>
        <p className="product__price">Price: ${price}</p>
      </div>

      <button className="product__cart" onClick={() => addToCart(product)}>
        <AiOutlineShoppingCart className="product__cart-icon" />
      </button>
    </div>
  );
};

export default Product;
