import { useState } from 'react';
import './Bookings.css';

export default function Bookings() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventDetails: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Email is invalid';
    if (!formData.eventDetails.trim()) errs.eventDetails = 'Please provide event details';
    return errs;
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // For prototype: just simulate submit success
      setSubmitted(true);
      setErrors({});
      // Reset form (optional)
      setFormData({ name: '', email: '', eventDetails: '' });
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  return (
    <div className="booking-page">
      <h2>📅 Book the Artist</h2>

      {submitted ? (
        <div className="success-message">
          Thanks for reaching out! We'll get back to you soon.
        </div>
      ) : (
        <form className="booking-form" onSubmit={handleSubmit} noValidate>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </label>

          <label>
            Event Details:
            <textarea
              name="eventDetails"
              value={formData.eventDetails}
              onChange={handleChange}
              className={errors.eventDetails ? 'input-error' : ''}
              rows="4"
            />
            {errors.eventDetails && <span className="error-text">{errors.eventDetails}</span>}
          </label>

          <button type="submit">Send Booking Request</button>
        </form>
      )}
    </div>
  );
}
