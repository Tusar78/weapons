import React, { useEffect, useState } from "react";

const Products = () => {
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
              return <>hello react</>
            })
          }
      </div>
    </>  
  )
};

export default Products;
