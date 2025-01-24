import React, { useContext } from 'react';
import { StoreContext } from '../../context/storecontext';

const Cart = () => {
    const { cart, setCart } = useContext(StoreContext);

    return (
        <div>
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cart.map((item, index) => (
                    <div key={index}>
                        <h3>{item.name}</h3>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
