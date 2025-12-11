import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import styles from './ProtectedRoute.module.css';

const ProtectedRoute = ({ children, roles = [] }) => {
    const {user, loading } = useAuth();
   
   
    if (loading) {
        return <div className= {styles.loading}> loading....</div>;
    }

    if(!user) {
        return <Navigate to="/login" replace />;

    }

    if (roles.length > 0 && !roles.includes(user.role)) {
        return <Navigate to="/" replace />;
    }
    return children;

};

export default ProtectedRoute;