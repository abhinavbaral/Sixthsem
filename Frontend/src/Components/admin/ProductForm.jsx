import React, { useState, useEffect } from 'react';
import { useProducts } from '../../Contexts/ProductContext';

const ProductForm = ({ product: initialProduct, onSubmit, onCancel }) => {
  const { createProduct } = useProducts();

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
    category: '',
  });

  const [error, setError] = useState('');

  useEffect(() => {
    if (initialProduct) {
      setFormData({
        name: initialProduct.name,
        price: initialProduct.price,
        image: initialProduct.image,
        description: initialProduct.description || '',
        category: initialProduct.category || '',
      });
    }
  }, [initialProduct]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.price || !formData.image || !formData.category) {
      setError('Please fill all required fields.');
      return;
    }

    if (parseFloat(formData.price) <= 0) {
      setError('Price must be greater than 0.');
      return;
    }

    const productData = {
      ...formData,
      price: parseFloat(formData.price),
    };

    const success = await createProduct(productData);

    if (success) {
      onSubmit();
    } else {
      setError('Failed to save product. Try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{initialProduct ? 'Edit Product' : 'Add New Product'}</h2>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      <div>
        <label htmlFor="name">Product Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="price">Price *</label>
        <input
          id="price"
          name="price"
          type="number"
          step="0.01"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="image">Image URL *</label>
        <input
          id="image"
          name="image"
          type="url"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <div>
          <label>Preview:</label>
          <img
            src={
              formData.image ||
              'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
            }
            alt="Product Preview"
            style={{
              width: '120px',
              height: '120px',
              objectFit: 'cover',
              borderRadius: '8px',
              marginTop: '0.5rem',
            }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="category">Category *</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select category</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
          <option value="Home">Home & Garden</option>
        </select>
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter product description"
        />
      </div>

      <div>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">
          {initialProduct ? 'Update Product' : 'Add Product'}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
