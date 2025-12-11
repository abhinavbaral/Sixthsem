import React from 'react';
import AdminDashboard from '../../Components/admin/AdminDashboard';
import Header from '../../Components/common/Header';
import Footer from '../../Components/common/Footer';

const Dashboard = () => {
    return (
        <div>
            <Header />
            <AdminDashboard />
            <Footer />
        </div>
    );
};

export default Dashboard;
