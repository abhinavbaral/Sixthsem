import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../../Contexts/ProductContext';
import CartItem from './CartItem';

const Cart = () => {
    const { cart } = useProducts();
    const [localCart, setLocalCart] = useState(cart);

    const updateQuantity = (id, quantity) => {
        setLocalCart(
            localCart.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const removeFromCart = (id) => {
        setLocalCart(localCart.filter(item => item.id !== id));
    };

    const calculateTotal = () => {
        return localCart
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2);
    };

    const clearCart = () => {
        setLocalCart([]);
    };

    if (localCart.length === 0) {
        return (
            <div>
                <h2>Your Cart is Empty</h2>
                <p>Add some products to get started!!</p>
                <Link to="/">Continue Shopping</Link>
            </div>
        );
    }

    return (
        <div>
            <h1>Shopping Cart</h1>
            <div>
                <div>
                    {localCart.map(item => (
                        <CartItem
                            key={item.id}
                            item={item}
                            onUpdateQuantity={updateQuantity}
                            onRemove={removeFromCart}
                        />
                    ))}
                </div>
                <div>
                    <h3>Order Summary</h3>
                    <div>{localCart.length} items</div>
                    <div>Subtotal: ${calculateTotal()}</div>
                    <button onClick={clearCart}>Clear Cart</button>
                    <Link to="/checkout">Proceed to Checkout</Link>
