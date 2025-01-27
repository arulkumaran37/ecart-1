import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/header';
import { StoreProvider } from './context/store_context';
import Heom from './pages/home/home';
import ProductList from './pages/products/products';
import Cart from './pages/cart/cart';
import Profile from './pages/profile/profile';
import './styles/global.css';

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </StoreProvider>
  );
};

export default App;
