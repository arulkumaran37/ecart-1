import React, { useState } from "react";
import "./login.css";
import Cart from "../../assets/cart.png";
import Logo from "../../assets/logo.png";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log("Logged in with:", email, password);
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img src={Logo} alt="logo" className="Logoimg" />
        <h2>Welcome Back!</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              disabled={isLoading}
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
              disabled={isLoading}
            />
          </div>

          <button type="submit" className="SignPagebtn" disabled={isLoading}>
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>
        <p>
          Don't have an account? <a href="#">Register</a>
        </p>
      </div>
      {/* Cart image for larger screens */}
      <div className="image-cart">
        <img src={Cart} alt="cart" className="Cartimg" />
      </div>
    </div>
  );
}

export default LoginPage;