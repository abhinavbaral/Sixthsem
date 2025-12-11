import React, { createContext, useState, useEffect, useContext } from 'react';
import { getProducts, createProduct, deleteProduct } from '../services/productService';
import { MOCK_PRODUCTS } from '../utils/constants';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => { 
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data || MOCK_PRODUCTS);
      } catch (err) { 
        setError('Failed to load products');
      } finally { 
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Add to cart
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Update quantity
  const updateCartQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Create product
  const createProductHandler = async (newProduct) => {
    try {
      const result = await createProduct(newProduct);
      if (result.success) {
        setProducts((prevProducts) => [...prevProducts, result.product]);
        return true;
      } else {
        setError(result.error);
        return false;
      }
    } catch (err) {
      setError('Failed to create product');
      return false;
    }
  };

  // Delete product
  const deleteProductHandler = async (id) => {
    try { 
      const success = await deleteProduct(id);
      if (success) { 
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
      }
    } catch (err) { 
      setError('Failed to delete product');
    }
  };

  const value = { 
    products,
    cart,
    loading,
    error,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    createProduct: createProductHandler,
    deleteProduct: deleteProductHandler,
  };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};
