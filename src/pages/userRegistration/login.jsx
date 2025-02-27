import React, { useState } from "react";
import "./login.css";
import Cart from "../../assets/cart.png";
import Logo from "../../assets/logo.png";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here (e.g., API call, validation)
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img src={Logo} alt="logo" className="Logoimg" />
        <h2>Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <button htmlFor="forgotpassword" className="forgot-btn">
              Forgot Password?
            </button>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>

          <button type="submit" className="SignPagebtn">
            Sign In
          </button>
        </form>
        <p>
          Don't have an account? <a href="#">Register</a>
        </p>
      </div>
      <div className="image-cart">
        <img src={Cart} alt="cart" className="Cartimg" />
      </div>
    </div>
  );
}

export default LoginPage;
