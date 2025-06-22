import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const CheckoutPage = () => {
  const { items, total } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // TODO: Implement actual checkout logic
    console.log('Checkout data:', { formData, items, total });
    
    setTimeout(() => {
      setLoading(false);
      // Redirect to success page
      window.location.href = '/payment-success';
    }, 2000);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px' }}>
      <h2>Checkout</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '40px' }}>
        {/* Checkout Form */}
        <div>
          <h3>Delivery Information</h3>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label>Full Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  marginTop: '5px'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  marginTop: '5px'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  marginTop: '5px'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <label>Address:</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows="3"
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  marginTop: '5px',
                  resize: 'vertical'
                }}
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '15px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                fontSize: '1.1rem',
                cursor: loading ? 'not-allowed' : 'pointer'
              }}
            >
              {loading ? 'Processing...' : 'Place Order'}
            </button>
          </form>
        </div>
        
        {/* Order Summary */}
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '10px',
          height: 'fit-content'
        }}>
          <h3>Order Summary</h3>
          <div style={{ marginBottom: '15px' }}>
            <p>Items: {items.length}</p>
            <p>Total: RM {total.toFixed(2)}</p>
          </div>
          
          <div style={{ borderTop: '1px solid #ddd', paddingTop: '15px' }}>
            <h4>Delivery Options</h4>
            <p>Standard Delivery (1-2 days): FREE</p>
            <p>Express Delivery (Same day): RM 10.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;