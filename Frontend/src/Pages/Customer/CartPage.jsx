import React from 'react';
import { Cart } from '../../components/cart';
import {Header, Footer } from '../../components/common';

const CartPage = () => {
    return ( 
        <div>
            <Header /> 
            <Cart />
            <Footer />

        </div>
    );
};

export default CartPage;
