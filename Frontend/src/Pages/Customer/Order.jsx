 import React from 'react';
 import styles from '.Orders.module.css';

 const Orders = () =>  {
    const orders = [{ id: 1, date: '2025-10-01', total: '$99.99'}];
    return ( 
        <div className={styles.orders}>
            <h1> Order History </h1>
            {orders.length > 0 ? (
                <ul>
                    { orders.map(order => 
                        <li key={order.id}>Order #{order.id} - {order.date} - {order.total}</li>
                    )}
                </ul>
            ) : (
                <p>No orders yet.</p>
            
            )}
        </div>

    );
 };

 export default Orders;