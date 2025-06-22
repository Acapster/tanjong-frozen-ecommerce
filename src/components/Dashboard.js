import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      <nav style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
        <Link to="/dashboard" style={{ marginRight: '20px', textDecoration: 'none' }}>Home</Link>
        <Link to="/dashboard/orders" style={{ marginRight: '20px', textDecoration: 'none' }}>Orders</Link>
        <Link to="/dashboard/profile" style={{ marginRight: '20px', textDecoration: 'none' }}>Profile</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/orders" element={<DashboardOrders />} />
        <Route path="/profile" element={<DashboardProfile />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </div>
  );
};

const DashboardHome = () => (
  <div>
    <h2>Welcome to Tanjong Frozen</h2>
    <p>Your dashboard for managing orders and account information.</p>
  </div>
);

const DashboardOrders = () => (
  <div>
    <h2>Your Orders</h2>
    <p>View and track your frozen goods orders here.</p>
  </div>
);

const DashboardProfile = () => (
  <div>
    <h2>Profile Settings</h2>
    <p>Manage your account information and preferences.</p>
  </div>
);

export default Dashboard;