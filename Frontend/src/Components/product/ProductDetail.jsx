import React, {useState, useEffect } from 'react';
import {useParams, useNavigate, Link } from 'react-router-dom';
import styles from './ProductDetail.module.css';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { products, addToCart } = useProducts();
    const [product, setProduct] = useState(null);
    const[quantity, setQuantity] = useState(1);

    useEffect(() => {
        const foundProduct = products.find((p) => p.id === parseInt(id));
        setProduct(foundProduct || null);
    }, [id, products]);
    
    const handleAddToCart = () => {
        if (product) {
            const itemToAdd = { ...product, quantity };
            addToCart(itemToAdd);
        }
    };
     if (!product) {
         return <div className={styles.notFound}> Product not found.</div>;
     }

     return (
         <div className={styles.detailContainer}>
            <button onClick={() => navigate(-1)} className={styles.backBtn}>
            Back to Products
            </button>
            <div className={styles.content}>
                <div className={styles.imageSection}>
                    <img src={product.image} alt={product.name} className={styles.mainImage} />

                    <div className={styles.gallery}>
                        <img src={product.image} alt="Thumbnail" className={styles.thumbnail} />
                        <img src={product.image} alt="Thumbnail" className={styles.thumbnail} />

                    </div>

                </div>

                <div className={styles.infoSection}>
                    <h1 className={styles.name}>{product.name}</h1>
                    <p className={styles.price}>${product.price}</p>
                    <div className={styles.rating}>*****(5) - 120 reviews</div>

                    <div className={styles.description}>
                        <h3> Description </h3>
                        <p> {product.description || 'High-quality product with excellent features. Perfect for everyday use'} </p>
                    </div>

                    <div className={styles.quantity}>
                        <label>Quantity: </label>
                        <input 
                           type="number"
                           min="1"
                           value={quantity}
                           onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                           className={styles.qtyInput}
                           />

                    </div>
                    <button onClick={handleAddToCart} className={`${styles.addBtn} btn`}>
                        Add to Cart - ${product.price * quantity}
                    </button>
                    

                    <Link to ="/cart" className={styles.cartLink}>
                    Go to Cart
                    </Link>
                </div>
            </div>
         </div>
     );


};
 export default ProductDetail;