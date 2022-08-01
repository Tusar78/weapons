import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = product => {
    const newCart = [...cart, product];
    setCart(newCart);
  }

  return (
    <>
      <header className="header">
        <Navbar cart={cart} />
      </header>
      <main className="main">
        <Products addToCart={addToCart} />
      </main>
    </>
  );
}

export default App;
