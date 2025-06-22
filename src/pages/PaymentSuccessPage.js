import React from 'react';
import { Link } from 'react-router-dom';

const PaymentSuccessPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px 20px' }}>
      <div style={{
        maxWidth: '500px',
        margin: '0 auto',
        backgroundColor: '#d4edda',
        border: '1px solid #c3e6cb',
        borderRadius: '10px',
        padding: '40px'
      }}>
        <h1 style={{ color: '#155724', marginBottom: '20px' }}>✅ Order Successful!</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '30px', color: '#155724' }}>
          Thank you for your order! Your frozen goods will be delivered soon.
        </p>
        
        <div style={{ marginBottom: '30px', textAlign: 'left' }}>
          <h3>What's Next?</h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li>You'll receive an email confirmation shortly</li>
            <li>Track your order in real-time from your dashboard</li>
            <li>Our delivery team will contact you before delivery</li>
            <li>Enjoy your fresh frozen products!</li>
          </ul>
        </div>
        
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link 
            to="/dashboard/orders" 
            style={{
              padding: '12px 24px',
              backgroundColor: '#007bff',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '5px',
              fontWeight: 'bold'
            }}
          >
            Track Order
          </Link>
          <Link 
            to="/dashboard" 
            style={{
              padding: '12px 24px',
              backgroundColor: '#6c757d',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '5px',
              fontWeight: 'bold'
            }}
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <h3>Need Help?</h3>
        <p>Contact our customer service team if you have any questions about your order.</p>
        <p>📞 Phone: +60 12-345-6789 | 📧 Email: support@tanjongfrozen.com</p>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;