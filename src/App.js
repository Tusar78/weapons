import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';

function App() {
  const addToCart = product => {
    console.log(product);
  }

  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
        <Products addToCart={addToCart} />
      </main>
    </>
  );
}

export default App;
