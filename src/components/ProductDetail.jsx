// src/components/ProductDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="loading">Loading product...</div>;

  return (
    <div className="product-detail">
      <img src={product.thumbnail} alt={product.title} />
      <div className="product-detail-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ₹{product.price}</p>
        <p>Category: {product.category}</p>
        <p>Rating: ⭐ {product.rating}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
