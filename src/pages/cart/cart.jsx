import React from 'react';
import './cart.css';

const Cart = () => {
    const cartItems = [
        { id: 1, name: 'Product 1', price: 99.99, quantity: 2 },
        { id: 2, name: 'Product 2', price: 49.99, quantity: 1 },
    ];

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            <div className="cart-items">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                ))}
            </div>
            <button>Proceed to Checkout</button>
        </div>
    );
};

export default Cart;
