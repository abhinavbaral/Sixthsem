import React from 'react';
import AdminDashboard from '../../Components/admin/AdminDashboard';
import Header from '../../Components/common/Header';
import Footer from '../../Components/common/Footer';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-green-50 flex flex-col">
            <Header />

            <main className="flex-grow py-8 px-6">
                <AdminDashboard />
            </main>

            <Footer />
        </div>
    );
};

export default Dashboard;
