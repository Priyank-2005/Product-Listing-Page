import React, { useState } from 'react';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, change) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity + change } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div className="topbar">
        <h2 className="logo">Product Listing Page</h2>
        <div className="cart" onClick={toggleDrawer}>
          <span className="cart-icon">🛒</span>
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </div>
      </div>

      <ProductList addToCart={addToCart} />

      <div className={`cart-drawer ${drawerOpen ? 'open' : ''}`}>
        <h3>Your Cart</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.thumbnail} alt={item.title} />
                <div className="item-info">
                  <h4>{item.title}</h4>
                  <p>₹ {item.price} × {item.quantity}</p>
                  <div className="qty-btns">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
              </div>
            ))}
            <h4>Total: ₹ {totalPrice}</h4>
          </>
        )}
      </div>
    </>
  );
}

export default App;
