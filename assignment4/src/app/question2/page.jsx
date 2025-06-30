'use client';

import { useState } from 'react';

export default function SimpleFormPage() {
  const [name, setName] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false); 
  const [shipping, setShipping] = useState(''); 

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      userName: name,
      subscribed: isSubscribed,
      shippingMethod: shipping,
    };
    
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <label htmlFor="nameInput">Name: </label>
          <input
            id="nameInput"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={isSubscribed}
              onChange={(e) => setIsSubscribed(e.target.checked)}
            />
            Subscribe to our newsletter
          </label>
        </div>

          
          <div>
            <label>
              <input
                type="radio"
                value="Express"
                checked={shipping === 'Express'}
                onChange={(e) => setShipping(e.target.value)}
              />
              Express Shipping
            </label>
          </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}