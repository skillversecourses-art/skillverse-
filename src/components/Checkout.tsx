import React, { useState, useEffect } from 'react';
import type { Course } from '../data/courses';
import { useEnrollment } from '../hooks/useEnrollment';
import './Checkout.css';

interface Props {
  course: Course;
  onBack: () => void;
  onSuccess: () => void;
}

const Checkout: React.FC<Props> = ({ course, onBack, onSuccess }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { enrollInCourse } = useEnrollment();

  // Load Razorpay script dynamically
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    setIsProcessing(true);

    // --- SIMULATION FOR NOW ---
    // Remove this setTimeout and uncomment the real Razorpay code below when ready.
    setTimeout(() => {
      enrollInCourse(course.id);
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);

    /* --- REAL RAZORPAY CODE ---
    // When you have an approved Razorpay gateway, replace "rzp_test_YOUR_KEY_HERE"
    // with your actual key and uncomment this block.
    const options = {
      key: 'rzp_test_YOUR_KEY_HERE',
      amount: course.price * 100,
      currency: 'INR',
      name: 'SkillVerse',
      description: `Enrollment for ${course.title}`,
      image: 'https://funcchofpsexcbohpvyd.supabase.co/storage/v1/object/public/public/logo.png',
      handler: function (response: any) {
        console.log('Payment ID:', response.razorpay_payment_id);
        enrollInCourse(course.id);
        setIsProcessing(false);
        setIsSuccess(true);
      },
      prefill: {
        name: 'User Name',
        email: 'user@example.com',
        contact: '9999999999'
      },
      theme: {
        color: '#2563eb'
      }
    };

    try {
      const rzp1 = new (window as any).Razorpay(options);

      rzp1.on('payment.failed', function (response: any) {
        alert('Payment Failed: ' + response.error.description);
        setIsProcessing(false);
      });

      rzp1.open();
    } catch (error) {
      console.error("Razorpay SDK not loaded", error);
      alert("Payment gateway is currently unavailable.");
      setIsProcessing(false);
    }
    --------------------------- */
  };

  if (isSuccess) {
    return (
      <div className="checkout-page">
        <div className="checkout-container" style={{ display: 'block', maxWidth: '600px' }}>
          <div className="success-state">
            <div className="success-icon">✓</div>
            <h2 className="success-title">Payment Successful!</h2>
            <p className="success-desc">
              You are now enrolled in <strong>{course.title}</strong>. An email receipt has been sent to your registered email address.
            </p>
            <button className="watch-btn" onClick={onSuccess}>
              Start Watching Now
            </button>
          </div>
        </div>
      </div>
    );
  }

  const discountAmount = course.originalPrice - course.price;

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        
        <div className="checkout-left">
          <div className="checkout-header">
            <button className="back-btn" onClick={onBack}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to course
            </button>
            <h1 className="checkout-title">Complete Checkout</h1>
            <p className="checkout-subtitle">You're just one step away from learning.</p>
          </div>

          <div className="course-summary">
            <img src={course.image} alt={course.title} className="cs-image" />
            <span className="cs-category">{course.category}</span>
            <h3 className="cs-title">{course.title}</h3>
            <div className="cs-meta">
              <span>👨‍🏫 {course.instructor}</span>
              <span>📚 {course.lessons} lessons</span>
              <span>⏱ {course.duration}</span>
            </div>
          </div>
        </div>

        <div className="checkout-right">
          <div className="payment-card">
            <h3 className="payment-title">Order Summary</h3>
            
            <div className="price-row">
              <span>Original Price</span>
              <span>₹{course.originalPrice.toLocaleString()}</span>
            </div>
            
            <div className="price-row discount">
              <span>Discount applied</span>
              <span>-₹{discountAmount.toLocaleString()}</span>
            </div>

            <div className="price-row total">
              <span>Total to Pay</span>
              <span>₹{course.price.toLocaleString()}</span>
            </div>

            <button 
              className="pay-btn" 
              onClick={handlePayment} 
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing...' : 'Pay securely with Razorpay'}
            </button>

            <div className="secure-badge">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              256-bit SSL encrypted secure checkout
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
