import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { LuUserRound } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { VscGitCompare } from "react-icons/vsc";
import { AiOutlineCustomerService } from "react-icons/ai";
import { TfiHelpAlt } from "react-icons/tfi";
import { IoCall } from "react-icons/io5";
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="header-nav">
        <div className="logo">eCart</div>
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
      <nav className="Sub-header">

        <div className="right-box">
        <select id="category" className="box">
            <option>All Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Home">Home</option>
        </select>
        
        <button class="box"><SlLocationPin className="icons-left"/> Track Order</button>
        <button class="box"><VscGitCompare className="icons-left"/> Compare</button>
        <button class="box"><AiOutlineCustomerService className="icons-left"/> Customer Support</button>
        <button class="box"><TfiHelpAlt className="icons-left" /> Need Help</button>

        </div>



        <p><IoCall className="icons-left"/>423-342-4234</p>

      </nav>
      </div>

    </>
  );
};

export default Header;
