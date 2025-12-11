import React, { useState } from 'react';
import { useAuth } from '../../Contexts/AuthContext';
import { useProducts } from '../../Contexts/ProductContext';
import ProductForm from './ProductForm';

const AdminDashboard = () => {
  const { user } = useAuth();
  const { products, deleteProduct } = useProducts();
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      await deleteProduct(id);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  const stats = {
    totalProducts: products.length,
    totalOrders: 150,
    totalRevenue: '$5,250.00',
  };

  return (
    <div>
      <header>
        <h1>Welcome, {user?.email || 'Admin'}</h1>
        <button onClick={() => setShowForm(true)}>Add New Product</button>
      </header>

      <div>
        <div>
          <h3>Total Products</h3>
          <p>{stats.totalProducts}</p>
        </div>
        <div>
          <h3>Total Revenue</h3>
          <p>{stats.totalRevenue}</p>
        </div>
      </div>

      <div>
        <h2>Manage Products</h2>
        {products.length === 0 ? (
          <p>No products available. Add one to get started.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>
                    <img src={product.image} alt={product.name} width="50" />
                  </td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                  <td>
                    <button onClick={() => handleEdit(product)}>Edit</button>
                    <button onClick={() => handleDelete(product.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {showForm && (
        <div>
          <div>
            <button onClick={handleCloseForm}>&times;</button>
            <ProductForm
              product={editingProduct}
              onSubmit={handleCloseForm}
              onCancel={handleCloseForm}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
