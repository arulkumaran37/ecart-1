import React from 'react';
import './products.css'
import ProductCard from '../../components/card/product_card';

const ProductList = () => {
    const sampleProducts = [
        { id: 1, name: 'Product A', price: 49.99, image: 'path_to_image' },
        { id: 2, name: 'Product B', price: 79.99, image: 'path_to_image' },
        { id: 3, name: 'Product C', price: 99.99, image: 'path_to_image' },
    ];

    return (
        <div className="product-list-page">
            <h1>All Products</h1>
            <div className="product-list">
                {sampleProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
