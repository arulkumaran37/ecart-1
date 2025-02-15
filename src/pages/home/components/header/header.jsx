import React from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">eCart</div>
      <div className="search-bar">
        <input type="text" placeholder="Search for products, brands and more" />
        <button><FaSearch /></button>
      </div>
      <div className="user-actions">
        <button><FaUser /> Login</button>
        <button><FaShoppingCart /> Cart</button>
      </div>
    </header>
  );
};

export default Header;
