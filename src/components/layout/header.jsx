import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { LuUserRound } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <div className="search-container">
            <input type="search" placeholder="Search for anything..." />
            <CiSearch className="search-icon" />
          </div>

          <div className="Icons-right">
            <FiShoppingCart />
            <CiHeart />
            <LuUserRound />
          </div>
        </nav>
      </header>

      <div>
      <header className="Sub-header">
        <select id="category" className="category">
            <option>All Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Home">Home</option>
        </select>
        
        <button class="box">Track Order</button>
        <button class="box">Customer Support</button>
        <button class="box">Need Help</button>
        
      
      </header>
      </div>

    </>
  );
};

export default Header;
