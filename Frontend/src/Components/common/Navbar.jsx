import React from 'react';
import {Link } from 'react-router-dom';
import{ useAuth } from '../../contexts/AuthContext';
import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
    const { isAdmin, isCustomer } = useAuth();

    return (
        <nav className={`${styles.navbar} navbar`}>
            
            <Link to="/" className={styles.logo}>
            <h1> E-Shop</h1>
            </Link>

            <ul className={styles.navLinks}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/">Categories</Link></li>
                {isCustomer && <li><Link to="/wishlist">wishlist</Link></li>}
                {isAdmin && <li><Link to="/admin/manage-products">Manage Products </Link></li>}
                {isCustomer && <li><Link to="/orders">Orders</Link></li>}

             </ul>
        </nav>
    );
};

export default Navbar;