// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="image-link">
        <img src={product.thumbnail} alt={product.title} />
      </Link>
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>Price: ₹{product.price}</p>
        <p>Category: {product.category}</p>
        <p>Rating: ⭐ {product.rating}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
