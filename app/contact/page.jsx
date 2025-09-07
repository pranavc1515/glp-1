"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Header6 from '@/components/headers/Header6';
import Topbar from '@/components/headers/Topbar';
import Footer6 from '@/components/footers/Footer6';
import { panels } from '@/data/contact';

export const metadata = {
  title: 'Contact HealthFlexi | Get in Touch with Our Medical Team',
  description: 'Contact HealthFlexi for questions about our medical weight loss program, GLP-1 medications, or to schedule a consultation with our healthcare providers.',
};

export default function ContactPage() {
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
    <>
      <div className="theme-3">
        <div className="bp-xs page-wrapper home-7 bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden disable-cursor">
          <Topbar />
          <Header6 />
          <div id="wrapper" className="wrap">
            
            {/* Header Section */}
            <div className="section panel py-6 xl:py-9 bg-secondary dark:bg-gray-900">
              <div className="container max-w-lg">
                <div className="section-inner panel mt-2 sm:mt-4 lg:mt-0">
                  <div
                    className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center"
                    data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                  >
                    <Link 
                      href="/" 
                      className="btn btn-sm btn-outline-primary mb-4"
                    >
                      ← Back to Home
                    </Link>
                    <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                      Contact HealthFlexi
                    </h1>
                    <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                      Get in touch with our medical team for questions about our weight loss program, 
                      GLP-1 medications, or to schedule a consultation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="section panel py-6 xl:py-9">
              <div className="container">
                <div className="row child-cols-12 lg:child-cols-2 col-match g-4 lg:g-8">
                  
                  {/* Contact Form */}
                  <div className="col">
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
                  </div>

                  {/* Contact Information */}
                  <div className="col">
                    <div
                      className="panel vstack gap-4"
                      data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
                    >
                      
                      {/* Contact Details */}
                      <div className="panel bg-primary-50 dark:bg-primary-900 rounded-2 p-4 lg:p-6">
                        <h3 className="h4 mb-4 text-primary dark:text-primary-200">Get in Touch</h3>
                        <div className="vstack gap-3">
                          <div className="hstack gap-3">
                            <div className="w-40px h-40px bg-primary-100 dark:bg-primary-800 rounded-circle d-flex align-items-center justify-content-center">
                              <i className="icon unicon-phone text-primary dark:text-primary-200"></i>
                            </div>
                            <div>
                              <div className="fw-bold text-primary dark:text-primary-200">Phone</div>
                              <div className="fs-6 text-primary dark:text-primary-200 text-opacity-80">
                                7755008817
                              </div>
                            </div>
                          </div>
                          
                          <div className="hstack gap-3">
                            <div className="w-40px h-40px bg-primary-100 dark:bg-primary-800 rounded-circle d-flex align-items-center justify-content-center">
                              <i className="icon unicon-email text-primary dark:text-primary-200"></i>
                            </div>
                            <div>
                              <div className="fw-bold text-primary dark:text-primary-200">Email</div>
                              <div className="fs-6 text-primary dark:text-primary-200 text-opacity-80">
                                consultation@healthflexi.com
                              </div>
                            </div>
                          </div>
                          
                          <div className="hstack gap-3">
                            <div className="w-40px h-40px bg-primary-100 dark:bg-primary-800 rounded-circle d-flex align-items-center justify-content-center">
                              <i className="icon unicon-location text-primary dark:text-primary-200"></i>
                            </div>
                            <div>
                              <div className="fw-bold text-primary dark:text-primary-200">Address</div>
                              <div className="fs-6 text-primary dark:text-primary-200 text-opacity-80">
                                HealthFlexi Medical Center<br />
                                123 Medical Plaza, Suite 100<br />
                                Healthcare City, HC 12345
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Business Hours */}
                      <div className="panel bg-success-50 dark:bg-success-900 rounded-2 p-4 lg:p-6">
                        <h3 className="h4 mb-4 text-success dark:text-success-200">Business Hours</h3>
                        <div className="vstack gap-2">
                          <div className="hstack justify-between">
                            <span className="fs-6 text-success dark:text-success-200">Monday - Friday</span>
                            <span className="fw-bold text-success dark:text-success-200">9:00 AM - 6:00 PM</span>
                          </div>
                          <div className="hstack justify-between">
                            <span className="fs-6 text-success dark:text-success-200">Saturday</span>
                            <span className="fw-bold text-success dark:text-success-200">10:00 AM - 4:00 PM</span>
                          </div>
                          <div className="hstack justify-between">
                            <span className="fs-6 text-success dark:text-success-200">Sunday</span>
                            <span className="fw-bold text-success dark:text-success-200">Closed</span>
                          </div>
                        </div>
                      </div>

                      {/* Emergency Contact */}
                      <div className="panel bg-warning-50 dark:bg-warning-900 rounded-2 p-4 lg:p-6">
                        <h3 className="h4 mb-4 text-warning dark:text-warning-200">Emergency Support</h3>
                        <p className="fs-6 text-warning dark:text-warning-200 text-opacity-80 mb-3">
                          For urgent medical concerns or medication side effects, please contact us immediately.
                        </p>
                        <div className="hstack gap-2">
                          <Link 
                            href="tel:+1-800-HEALTH" 
                            className="btn btn-warning btn-sm"
                          >
                            Call Now
                          </Link>
                          <Link 
                            href="/mounjaro-consultation" 
                            className="btn btn-outline-warning btn-sm"
                          >
                            Book Urgent Consultation
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="section panel py-6 xl:py-9 bg-gray-50 dark:bg-gray-800">
              <div className="container">
                <div
                  className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <h2 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                    Frequently Asked Questions
                  </h2>
                  <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                    Quick answers to common questions about our services
                  </p>
                </div>
                
                <div className="row child-cols-12 lg:child-cols-2 col-match g-4 lg:g-6">
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-700 rounded-2 p-4 lg:p-6">
                      <h4 className="h5 mb-3 text-dark dark:text-white">How quickly can I get started?</h4>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70">
                        Most patients can complete their initial assessment and consultation within 24-48 hours. 
                        Medication delivery typically takes 3-5 business days after approval.
                      </p>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-700 rounded-2 p-4 lg:p-6">
                      <h4 className="h5 mb-3 text-dark dark:text-white">Do you accept insurance?</h4>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70">
                        Yes, we work with most major insurance providers. Our team will help verify your 
                        coverage and maximize your benefits for GLP-1 medications.
                      </p>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-700 rounded-2 p-4 lg:p-6">
                      <h4 className="h5 mb-3 text-dark dark:text-white">What if I have side effects?</h4>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70">
                        Our medical team is available 24/7 for urgent concerns. We provide comprehensive 
                        support and can adjust your treatment plan as needed.
                      </p>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-700 rounded-2 p-4 lg:p-6">
                      <h4 className="h5 mb-3 text-dark dark:text-white">Can I cancel anytime?</h4>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70">
                        Yes, you can cancel your subscription at any time. We also offer a 30-day 
                        satisfaction guarantee for new patients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Section */}
            <div className="section panel py-6 xl:py-9">
              <div className="container">
                <div
                  className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <h2 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                    Quick Actions
                  </h2>
                  <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                    Get started with these popular actions
                  </p>
                </div>
                
                <div className="row child-cols-12 lg:child-cols-3 col-match g-4 lg:g-6">
                  <div className="col">
                    <div className="panel bg-primary-50 dark:bg-primary-900 rounded-2 p-4 lg:p-6 text-center h-100">
                      <div className="w-64px h-64px bg-primary-100 dark:bg-primary-800 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                        <i className="icon unicon-clipboard text-primary dark:text-primary-200"></i>
                      </div>
                      <h3 className="h5 mb-3 text-primary dark:text-primary-200">Start Assessment</h3>
                      <p className="fs-6 text-primary dark:text-primary-200 text-opacity-80 mb-4">
                        Complete our free eligibility assessment to see if you qualify for GLP-1 treatment
                      </p>
                      <Link 
                        href="/mounjaro-assessment" 
                        className="btn btn-primary btn-sm"
                      >
                        Begin Assessment
                      </Link>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel bg-success-50 dark:bg-success-900 rounded-2 p-4 lg:p-6 text-center h-100">
                      <div className="w-64px h-64px bg-success-100 dark:bg-success-800 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                        <i className="icon unicon-video-camera text-success dark:text-success-200"></i>
                      </div>
                      <h3 className="h5 mb-3 text-success dark:text-success-200">Book Consultation</h3>
                      <p className="fs-6 text-success dark:text-success-200 text-opacity-80 mb-4">
                        Schedule a virtual consultation with one of our licensed healthcare providers
                      </p>
                      <Link 
                        href="/mounjaro-consultation" 
                        className="btn btn-success btn-sm"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel bg-info-50 dark:bg-info-900 rounded-2 p-4 lg:p-6 text-center h-100">
                      <div className="w-64px h-64px bg-info-100 dark:bg-info-800 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                        <i className="icon unicon-calculator text-info dark:text-info-200"></i>
                      </div>
                      <h3 className="h5 mb-3 text-info dark:text-info-200">Health Calculators</h3>
                      <p className="fs-6 text-info dark:text-info-200 text-opacity-80 mb-4">
                        Use our comprehensive health calculators to track your progress and goals
                      </p>
                      <Link 
                        href="/calculators" 
                        className="btn btn-info btn-sm"
                      >
                        View Calculators
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <Footer6 />
        </div>
      </div>
    </>
  );
}
