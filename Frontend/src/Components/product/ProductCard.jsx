import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContext';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useProducts();

    const handleAddToCart = () => {
        addToCart(product);

    };

    return( 
        <div className={`${styles.card} product-card`}>
            <Link to={`/product/${product.id}`} className={styles.link}>
            <img src={product.image} alt={product.name} className={`${styles.image} product-image`} />
            <div className={styles.info}>
                <h3 className={styles.title}> {product.name}</h3>
                <p className={styles.price}>${product.price} </p>
                <div className={styles.rating}>
                    *****(5)
                </div>
            </div>
            
            
            </Link>

            <button onClick={handleAddToCart} className={`${styles.addBtn} btn`}>
                Add to Cart
            </button>
        </div>
    );
};
export default ProductCard;