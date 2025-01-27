import React from 'react';
import './home.css';
import ProductCard from '../../components/card/product_card';

const Home = () => {
    const sampleProducts = [
        { id: 1, name: 'Product 1', price: 99.99, image: 'path_to_image' },
        { id: 2, name: 'Product 2', price: 199.99, image: 'path_to_image' },
    ];

    return (
        <div className="home">
            <h1>Welcome to Our Store</h1>
            <div className="product-list">
                {sampleProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;
