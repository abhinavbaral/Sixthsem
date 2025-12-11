import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/common/Header';
import SearchBar from '../Components/common/SearchBar';
import Footer from '../Components/common/Footer';
import ProductList from '../Components/product/ProductList';
import { useProducts } from '../Contexts/ProductContext';
import { useAuth } from '../Contexts/AuthContext';

const Home = () => {
    const { products, loading, error } = useProducts();
    const { user } = useAuth();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (!query.trim()) {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter((product) =>
                product.name.toLowerCase().includes(query.toLowerCase()) ||
                product.category.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    };

    return (
        <div>
            <Header />

            <section>
                <div>
                    <h1>Welcome to E-shop</h1>
                    {user ? (
                        <p>Hello, {user.role === 'admin' ? 'Admin' : user.email}! Discover amazing deals.</p>
                    ) : (
                        <p>Discover amazing deals and products just for you.</p>
                    )}
                    <Link to="/products">Shop Now</Link>
                </div>
            </section>

            <main>
                <SearchBar onSearch={handleSearch} />

                {searchQuery && (
                    <p>
                        Showing results for "{searchQuery}" ({filteredProducts.length} items)
                    </p>
                )}

                {loading ? (
                    <div>Loading Products...</div>
                ) : error ? (
                    <div>Error: {error}</div>
                ) : (
                    <ProductList products={filteredProducts} />
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Home;
