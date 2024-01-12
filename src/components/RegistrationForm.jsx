import React, { useState } from 'react';
import './form.css'


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contacts: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contacts: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors({
      firstName: '',
      lastName: '',
      email: '',
      contacts: '',
    });

    if (!formData.firstName.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, firstName: 'Please enter your first name!' }));
      return;
    }

    if (!formData.lastName.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, lastName: 'Please enter your last name!' }));
      return;
    }

    if (!formData.email.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Please enter your email!' }));
      return;
    }

    if (!formData.contacts.trim() || formData.contacts.length !== 10) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        contacts: 'Invalid phone number! Please enter a 10-digit number.',
      }));
      return;
    }

    alert('Registration successful!');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p className="error-message">{errors.firstName}</p>}
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p className="error-message">{errors.lastName}</p>}
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </label>

        <label>
          Contacts:
          <input
            type="tel"
            name="contacts"
            pattern="[0-9]{10}"
            value={formData.contacts}
            onChange={handleChange}
          />
          {errors.contacts && <p className="error-message">{errors.contacts}</p>}
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
