// src/pages/CartPage.jsx
import React from 'react';
import './CartPage.css';

function CartPage({ cartItems, setCartItems }) {
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const updateQuantity = (id, amount) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
    ));
  };

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.images[0]} alt={item.title} />
                <div className="info">
                  <h4>{item.title}</h4>
                  <p>${item.price}</p>
                  <div className="quantity">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <button className="remove" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total: ${getTotal()}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
