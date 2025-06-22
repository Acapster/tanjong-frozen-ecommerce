import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <div style={{
        width: '250px',
        backgroundColor: '#343a40',
        color: 'white',
        padding: '20px'
      }}>
        <h3 style={{ marginBottom: '30px' }}>Admin Panel</h3>
        <nav>
          <div style={{ marginBottom: '10px' }}>
            <Link to="/admin" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '10px' }}>Dashboard</Link>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <Link to="/admin/orders" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '10px' }}>Orders</Link>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <Link to="/admin/products" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '10px' }}>Products</Link>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <Link to="/admin/users" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '10px' }}>Users</Link>
          </div>
        </nav>
      </div>
      
      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px' }}>
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/orders" element={<AdminOrders />} />
          <Route path="/products" element={<AdminProducts />} />
          <Route path="/users" element={<AdminUsers />} />
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Routes>
      </div>
    </div>
  );
};

const AdminDashboard = () => (
  <div>
    <h2>Admin Dashboard</h2>
    <p>Welcome to the Tanjong Frozen admin panel.</p>
  </div>
);

const AdminOrders = () => (
  <div>
    <h2>Order Management</h2>
    <p>Manage all customer orders here.</p>
  </div>
);

const AdminProducts = () => (
  <div>
    <h2>Product Management</h2>
    <p>Add, edit, and manage frozen products.</p>
  </div>
);

const AdminUsers = () => (
  <div>
    <h2>User Management</h2>
    <p>View and manage customer accounts.</p>
  </div>
);

export default AdminLayout;