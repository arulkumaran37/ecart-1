import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h3>About</h3>
                <p>Contact Us</p>
                <p>About Us</p>
            </div>
            <div className="footer-section">
                <h3>Help</h3>
                <p>Payments</p>
                <p>Shipping</p>
            </div>
            <div className="footer-section">
                <h3>Policy</h3>
                <p>Return Policy</p>
                <p>Terms of Use</p>
            </div>
        </footer>
    );
};

export default Footer;
