'use client';

import { useState } from 'react';

interface BuyButtonProps {
  text: string;
  country: string;
  className?: string;
}

export default function BuyButton({ text, country, className }: BuyButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ country }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Error: ' + (data.error || 'Could not create checkout session'));
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Error connecting to checkout');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handleCheckout} 
      disabled={loading}
      className={className}
    >
      {loading ? '...' : text}
    </button>
  );
}
