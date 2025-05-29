import React from 'react';
import './ProductCard.css';

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="price">₹ {product.price}</p>
        <p className="category">{product.category}</p>
        <p className="rating">⭐ {product.rating}</p>
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
