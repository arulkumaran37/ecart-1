import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/header';
import Footer from './pages/home/components/footer/footer';
import Carousel from './pages/home/components/carousel/carousel';
import { StoreProvider } from './context/store_context';
import ProductList from './pages/products/products';
import Cart from './pages/cart/cart';
import Profile from './pages/profile/profile';
import './global.css';
import Home from './pages/home/home';
import Login from './pages/userRegistration/login';
const Register = true
const login = false

const IsUserAuthenticated = Register || login

const App = () => {
  return (
    <StoreProvider>
      <Router>
    { IsUserAuthenticated ?
    <>
        <Header />
        <Carousel/>
        <Home />
        <ProductList />
        <Cart />
        <Profile />
        <Footer/>
        </>
    : (
       <Login />
    )}
    </Router>   
  </StoreProvider>
  );
};

export default App;
