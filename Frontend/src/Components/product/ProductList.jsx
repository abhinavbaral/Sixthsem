import React from 'react';
import { useProducts } from '../../contexts/ProductContext';
import ProductCard from './ProductCard';
import styles from './ProductLists.module.css';

const ProductList = () => {
    const { products, loading, error } = useProducts();

    if(loading) {
         return <div className={`${styles.loading} loading`}> Loading products...</div>;
    }

    if(error) {
        return <div className={`${styles.error} error`}> Error loading products:{error}</div>;

    }
     return (
        <div className={styles.listContainer}>
            <h2 className={styles.title}> Featured Products</h2>
           <div className="product-grid">
            {products.map((product) => (
                <ProductCard key= {product.id} product={product}  />


            ))}

           </div>
           {product.length === 0 && ( 
            <p className={styles.noProducts}> No products avaiable.</p>

           )}
       
        </div>

     );
};
 export default ProductList;