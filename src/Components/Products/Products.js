import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [])
  return (
    <>
      <div className="product__container">
          {
            products.map(product => {
              return <Product key={product.id} product={product} addToCart={addToCart} />
            })
          }
      </div>
    </>  
  )
};

export default Products;
