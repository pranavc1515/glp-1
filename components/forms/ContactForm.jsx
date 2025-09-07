"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
    privacy: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div
      className="panel bg-white dark:bg-gray-800 rounded-2 p-4 lg:p-6"
      data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
    >
      <h2 className="h3 mb-4 text-dark dark:text-white">Send us a Message</h2>
      <form className="vstack gap-4" onSubmit={handleSubmit}>
        <div className="row child-cols-12 sm:child-cols-6 col-match g-3">
          <div className="col">
            <label className="form-label text-dark dark:text-white">First Name</label>
            <input 
              type="text" 
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="form-control" 
              placeholder="Enter your first name"
            />
          </div>
          <div className="col">
            <label className="form-label text-dark dark:text-white">Last Name</label>
            <input 
              type="text" 
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="form-control" 
              placeholder="Enter your last name"
            />
          </div>
        </div>
        
        <div>
          <label className="form-label text-dark dark:text-white">Email Address</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-control" 
            placeholder="Enter your email"
          />
        </div>
        
        <div>
          <label className="form-label text-dark dark:text-white">Phone Number</label>
          <input 
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="form-control" 
            placeholder="Enter your phone number"
          />
        </div>
        
        <div>
          <label className="form-label text-dark dark:text-white">Subject</label>
          <select 
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="form-control"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Medical Consultation">Medical Consultation</option>
            <option value="GLP-1 Eligibility">GLP-1 Eligibility</option>
            <option value="Billing Question">Billing Question</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div>
          <label className="form-label text-dark dark:text-white">Message</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="form-control" 
            rows="5" 
            placeholder="Tell us how we can help you..."
          ></textarea>
        </div>
        
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="checkbox" 
            name="privacy"
            checked={formData.privacy}
            onChange={handleInputChange}
            id="privacy"
          />
          <label className="form-check-label text-dark dark:text-white" htmlFor="privacy">
            I agree to the <Link href="/privacy-policy" className="text-primary">Privacy Policy</Link> and 
            <Link href="/terms-and-conditions" className="text-primary"> Terms of Service</Link>
          </label>
        </div>
        
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </div>
  );
}
