import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Shop from './pages/Shop/Shop';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Navbar from './components/Navbar/Navbar';
import GoodsList from './components/GoodsList/GoodsList';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/shop/:id" element={<GoodsList />} />
      </Routes>
    </>
  );
};

export default App;
