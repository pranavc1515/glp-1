"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useContextElement } from "@/context/Context";
import { products } from "@/data/products";
import MedicalDisclaimer from "@/components/legal/MedicalDisclaimer";

export default function MounjaroConsultation() {
  const router = useRouter();
  const { addProductToCart } = useContextElement();
  const [assessmentData, setAssessmentData] = useState(null);
  const [consultationBooked, setConsultationBooked] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [consultationForm, setConsultationForm] = useState({
    preferredDate: "",
    preferredTime: "",
    consultationType: "telehealth",
    additionalNotes: "",
    emergencyContact: "",
    pharmacyPreference: ""
  });

  useEffect(() => {
    // Retrieve assessment data from localStorage
    const storedAssessment = localStorage.getItem('mounjaroAssessment');
    if (storedAssessment) {
      setAssessmentData(JSON.parse(storedAssessment));
    } else {
      // Redirect back to assessment if no data found
      router.push('/mounjaro-assessment');
    }
  }, [router]);

  const handleFormChange = (field, value) => {
    setConsultationForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBookConsultation = (e) => {
    e.preventDefault();
    // Simulate booking process
    setConsultationBooked(true);
    
    // Store consultation booking data
    localStorage.setItem('mounjaroConsultation', JSON.stringify({
      ...consultationForm,
      assessmentData,
      bookingDate: new Date().toISOString(),
      status: 'scheduled'
    }));
  };

  const handleProceedToCart = (productId) => {
    // Add Mounjaro to cart
    addProductToCart(productId);
    
    // Store consultation completion status
    localStorage.setItem('mounjaroConsultationCompleted', JSON.stringify({
      completed: true,
      productId,
      consultationDate: new Date().toISOString()
    }));
    
    // Redirect to cart
    router.push('/shop-cart');
  };

  const getAvailableTimeSlots = () => {
    // Generate available time slots for the next 14 days
    const slots = [];
    const now = new Date();
    
    for (let day = 1; day <= 14; day++) {
      const date = new Date(now);
      date.setDate(now.getDate() + day);
      
      // Skip weekends for this example
      if (date.getDay() === 0 || date.getDay() === 6) continue;
      
      const timeSlots = [
        "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
        "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
      ];
      
      timeSlots.forEach(time => {
        slots.push({
          date: date.toISOString().split('T')[0],
          time,
          datetime: `${date.toDateString()} ${time}`
        });
      });
    }
    
    return slots.slice(0, 20); // Limit to 20 slots
  };

  const availableSlots = getAvailableTimeSlots();
  const mounjaroProducts = products.filter(p => p.name.includes("Mounjaro"));

  if (!assessmentData) {
    return (
      <div className="section py-6">
        <div className="container max-w-lg">
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading your assessment data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (consultationBooked) {
    return (
      <div className="section py-6 lg:py-8 xl:py-12">
        <div className="container max-w-3xl">
          <div className="panel vstack gap-6 lg:gap-8">
            <header className="text-center">
              <div className="text-success mb-3">
                <i className="icon-3 unicon-checkmark-circle"></i>
              </div>
              <h1 className="h2 lg:h1 m-0">Consultation Scheduled</h1>
              <p className="fs-6 text-dark dark:text-white text-opacity-70 mt-2">
                Your telehealth consultation has been successfully scheduled
              </p>
            </header>
            
            <div className="panel bg-white dark:bg-gray-800 border rounded-3 p-4 lg:p-6">
              <h3 className="h4 mb-4">Consultation Details</h3>
              
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="vstack gap-2">
                    <span className="fs-7 text-gray-500">Date & Time</span>
                    <span className="fw-bold">{consultationForm.preferredDate} at {consultationForm.preferredTime}</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="vstack gap-2">
                    <span className="fs-7 text-gray-500">Consultation Type</span>
                    <span className="fw-bold">Telehealth Video Call</span>
                  </div>
                </div>
              </div>
              
              <div className="alert alert-info mt-4">
                <h5 className="h6 mb-2">Next Steps:</h5>
                <ul className="mb-0">
                  <li>You will receive a confirmation email with video call details</li>
                  <li>A licensed healthcare provider will review your assessment</li>
                  <li>If approved, you can proceed with your Mounjaro prescription</li>
                  <li>The consultation fee will be applied as credit toward your first purchase</li>
                </ul>
              </div>
            </div>
            
            {/* Mounjaro Products Section */}
            <div className="panel bg-white dark:bg-gray-800 border rounded-3 p-4 lg:p-6">
              <h3 className="h4 mb-4">Available Mounjaro Products</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                After your consultation, if approved by the healthcare provider, you can add these products to your cart:
              </p>
              
              <div className="row g-4">
                {mounjaroProducts.map((product) => (
                  <div key={product.id} className="col-md-6">
                    <div className="panel border rounded-2 p-4">
                      <div className="vstack gap-3">
                        <div className="hstack gap-3">
                          <img 
                            src={product.image} 
                            alt={product.alt}
                            className="w-64px h-64px object-cover rounded"
                          />
                          <div className="vstack gap-1">
                            <h5 className="h6 m-0">{product.name}</h5>
                            <div className="hstack gap-2">
                              {product.oldPrice && (
                                <span className="price-old text-line-through opacity-40">
                                  ₹{product.oldPrice.toFixed(2)}
                                </span>
                              )}
                              <span className="price fw-bold text-primary">
                                ₹{product.price.toFixed(2)}
                              </span>
                              {product.discount && (
                                <span className="badge bg-yellow-400 text-dark">
                                  {product.discount} OFF
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <p className="fs-7 text-gray-600 dark:text-gray-400 mb-0">
                          {product.description}
                        </p>
                        
                        <button
                          onClick={() => handleProceedToCart(product.id)}
                          className="btn btn-primary text-white w-100"
                        >
                          Add to Cart (Post-Consultation)
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Legal Disclaimer */}
            <MedicalDisclaimer />
            
            <div className="text-center">
              <button
                onClick={() => router.push('/')}
                className="btn btn-outline-primary btn-lg"
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section py-6 lg:py-8 xl:py-12">
      <div className="container max-w-2xl">
        <div className="panel vstack gap-6 lg:gap-8">
          <header className="text-center">
            <h1 className="h2 lg:h1 m-0">Schedule Your Consultation</h1>
            <p className="fs-6 text-dark dark:text-white text-opacity-70 mt-2">
              Book a consultation with a licensed healthcare provider to discuss your Mounjaro treatment
            </p>
          </header>
          
          {/* Assessment Summary */}
          <div className="panel bg-success bg-opacity-10 border border-success border-opacity-20 rounded-3 p-4">
            <h3 className="h5 text-success mb-2">✓ Assessment Completed</h3>
            <p className="mb-0">
              Based on your assessment, you appear to be a candidate for Mounjaro. 
              A healthcare provider consultation is required to obtain a prescription.
            </p>
          </div>
          
          {/* Consultation Booking Form */}
          <div className="panel bg-white dark:bg-gray-800 border rounded-3 p-4 lg:p-6">
            <h3 className="h4 mb-4">Book Your Consultation</h3>
            
            <form onSubmit={handleBookConsultation} className="vstack gap-4">
              {/* Consultation Type */}
              <div className="form-group">
                <label className="form-label ft-tertiary fs-6 fw-bold">
                  Consultation Type <sup className="text-danger">*</sup>
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="consultationType"
                    id="telehealth"
                    value="telehealth"
                    checked={consultationForm.consultationType === "telehealth"}
                    onChange={(e) => handleFormChange("consultationType", e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="telehealth">
                    Telehealth (Video Call)
                  </label>
                </div>
              </div>
              
              {/* Available Time Slots */}
              <div className="form-group">
                <label className="form-label ft-tertiary fs-6 fw-bold">
                  Select Available Time Slot <sup className="text-danger">*</sup>
                </label>
                <div className="row g-2" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                  {availableSlots.map((slot, index) => (
                    <div key={index} className="col-md-6">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="timeSlot"
                          id={`slot_${index}`}
                          value={slot.datetime}
                          checked={selectedTimeSlot === slot.datetime}
                          onChange={(e) => {
                            setSelectedTimeSlot(e.target.value);
                            handleFormChange("preferredDate", slot.date);
                            handleFormChange("preferredTime", slot.time);
                          }}
                        />
                        <label className="form-check-label" htmlFor={`slot_${index}`}>
                          {slot.datetime}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Emergency Contact */}
              <div className="form-group">
                <label className="form-label ft-tertiary" htmlFor="emergencyContact">
                  Emergency Contact Phone
                </label>
                <input
                  type="tel"
                  id="emergencyContact"
                  className="form-control dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                  placeholder="(555) 123-4567"
                  value={consultationForm.emergencyContact}
                  onChange={(e) => handleFormChange("emergencyContact", e.target.value)}
                />
              </div>
              
              {/* Pharmacy Preference */}
              <div className="form-group">
                <label className="form-label ft-tertiary" htmlFor="pharmacyPreference">
                  Preferred Pharmacy
                </label>
                <input
                  type="text"
                  id="pharmacyPreference"
                  className="form-control dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                  placeholder="CVS, Walgreens, local pharmacy name"
                  value={consultationForm.pharmacyPreference}
                  onChange={(e) => handleFormChange("pharmacyPreference", e.target.value)}
                />
              </div>
              
              {/* Additional Notes */}
              <div className="form-group">
                <label className="form-label ft-tertiary" htmlFor="additionalNotes">
                  Additional Notes or Questions
                </label>
                <textarea
                  id="additionalNotes"
                  className="form-control dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                  rows={4}
                  placeholder="Any additional information you'd like to share with the healthcare provider..."
                  value={consultationForm.additionalNotes}
                  onChange={(e) => handleFormChange("additionalNotes", e.target.value)}
                />
              </div>
              
              {/* Consultation Fee Notice */}
              <div className="alert alert-info">
                <h5 className="h6 mb-2">Consultation Fee: ₹500</h5>
                <p className="mb-0">
                  This fee will be credited toward your first Mounjaro purchase if prescribed. 
                  Payment will be processed after your consultation is completed.
                </p>
              </div>
              
              {/* Terms Agreement */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="agreeTerms"
                  required
                />
                <label className="form-check-label" htmlFor="agreeTerms">
                  I agree to the consultation terms and understand that this does not guarantee a prescription. 
                  I consent to telehealth consultation and data sharing with healthcare providers.
                </label>
              </div>
              
              <button
                type="submit"
                disabled={!selectedTimeSlot}
                className="btn btn-lg btn-primary text-white w-100"
              >
                Schedule Consultation (₹500)
              </button>
            </form>
          </div>
          
          {/* Back to Assessment */}
          <div className="text-center">
            <button
              onClick={() => router.push('/mounjaro-assessment')}
              className="btn btn-outline-gray"
            >
              ← Back to Assessment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
