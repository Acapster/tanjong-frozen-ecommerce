import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px 20px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#007bff' }}>🧊 Tanjong Frozen</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: '#666' }}>
        Your trusted partner for premium frozen goods delivery
      </p>
      
      <div style={{ maxWidth: '600px', margin: '0 auto', marginBottom: '40px' }}>
        <h2>Fresh. Frozen. Delivered.</h2>
        <p>
          Experience the convenience of having premium frozen foods delivered right to your doorstep. 
          From frozen vegetables to gourmet ice cream, we've got everything you need to keep your 
          freezer stocked with quality products.
        </p>
      </div>
      
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link 
          to="/login" 
          style={{
            padding: '15px 30px',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontSize: '1.1rem',
            fontWeight: 'bold'
          }}
        >
          Login
        </Link>
        <Link 
          to="/signup" 
          style={{
            padding: '15px 30px',
            backgroundColor: '#28a745',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontSize: '1.1rem',
            fontWeight: 'bold'
          }}
        >
          Sign Up
        </Link>
      </div>
      
      <div style={{ marginTop: '60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', maxWidth: '800px', margin: '60px auto 0' }}>
        <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
          <h3>🚚 Fast Delivery</h3>
          <p>Same-day delivery available for orders placed before 2 PM</p>
        </div>
        <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
          <h3>❄️ Quality Guaranteed</h3>
          <p>Temperature-controlled delivery ensures freshness</p>
        </div>
        <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
          <h3>📱 Easy Ordering</h3>
          <p>Simple online ordering with real-time tracking</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;