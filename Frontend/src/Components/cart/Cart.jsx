import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../../Contexts/ProductContext';


const Cart = () => {
  const { cart, removeFromCart, updateCartQuantity } = useProducts();

  const calculateTotal = () =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const clearCart = () => {
    cart.forEach(item => removeFromCart(item.id));
  };

  if (!cart || cart.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>Price: ${item.price}</p>
            <p>
              Quantity:
              <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>-</button>
              {item.quantity}
              <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>+</button>
            </p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>Subtotal: ${calculateTotal()}</div>
      <button onClick={clearCart}>Clear Cart</button>
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
};

export default Cart;
