import React from 'react';
import { Login } from '../../Components/auth';
import { Header, Footer } from '../../components/common';

const LoginPage = () => {
    return ( 
        <div>
            <Header />
            <Login />
            <Footer />
        </div>
    );
};
export default LoginPage;