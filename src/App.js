import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';

function App() {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
        <Products />
      </main>
    </>
  );
}

export default App;
