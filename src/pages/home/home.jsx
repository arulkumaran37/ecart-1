import React from 'react';
import './home.css';

const Home = () => {
    const products = [
        { id: 1, name: 'Product 1', price: '₹999', image: 'https://placehold.co/600x400/png' },
        { id: 2, name: 'Product 2', price: '₹799', image: 'https://placehold.co/600x400/png' },
        { id: 3, name: 'Product 3', price: '₹1299', image: 'https://placehold.co/600x400/png' },
        { id: 4, name: 'Product 4', price: '₹1499', image: 'https://placehold.co/600x400/png' },
    ];

    return (
        <div className="product-grid">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Home;