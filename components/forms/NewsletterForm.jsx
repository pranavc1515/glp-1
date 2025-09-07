"use client";
import React, { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <div className="panel bg-white dark:bg-gray-800 rounded-2 p-4 lg:p-6 w-100 max-w-400px">
      <form onSubmit={handleEmailSubmit}>
        <div className="hstack gap-2">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control" 
            placeholder="Enter your email"
            required
          />
          <button type="submit" className="btn btn-primary">
            Subscribe
          </button>
        </div>
      </form>
      <p className="fs-7 text-dark dark:text-white text-opacity-60 mt-3 mb-0">
        No spam, unsubscribe at any time
      </p>
    </div>
  );
}
