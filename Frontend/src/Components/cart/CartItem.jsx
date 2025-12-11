 import React from 'react';
 import styles from './CartItem.module.css';

 const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
    const handleQuantityChange = (e) => {
        const newQty = Math.max(1,parseInt(e.target.value));
        onUpdateQuantity(item.id, newQty);

    };
 const handleRemove = () => {
    onRemove(item.id);
 };

 return (
    <div className={styles.item}>
        <img src ={item.image} alt={item.name} className={styles.image} />
        <div className={styles.details}>
            <h3 className={styles.name}>{item.name} </h3>
            <p className={styles.price}>${item.price} each </p>
            <div className={styles.quantity}>
                <label> Qty: </label>
                <input
                  type="number" 
                  min= "1"
                  value={item.quantity}
                  onChange={handleQuantityChange}
                  className={styles.qtyInput}
                  />

                  <span className={styles.total}> ${(item.price * item.quantity).toFixed(2)}</span>
                </div>

        </div>
        <button onClick={handleRemove} className={`${styles.removeBtn} btn-danger`}>
            Remove
        </button>

    </div>

 );
};

export default CartItem;
