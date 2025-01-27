import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="header-nav">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/wishlist">Wishlist</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/profile">Profile</Link>
            </nav>
        </header>
    );
};

export default Header;
