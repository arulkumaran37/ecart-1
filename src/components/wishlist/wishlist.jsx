import React, { useContext } from 'react';
import { StoreContext } from '../../context/storecontext';
import './wishlist.css';

const Wishlist = () => {
    const { wishlist } = useContext(StoreContext);

    return (
        <div className="wishlist">
            <h1>Your Wishlist</h1>
            {wishlist.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                wishlist.map((item, index) => (
                    <div key={index} className="wishlist-item">
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Wishlist;
