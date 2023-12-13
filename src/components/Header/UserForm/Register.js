
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { registerUser } from '../UserForm/AuthService';

import './UserForm.css';
export default function RegisterForm(props) {
  const { active } = props;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData);
    alert('Successfully registered!'); // Optional: Show a success message
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <form className={`register-form ${active ? 'active' : ''}`} onSubmit={handleSubmit}>
      <h3 className='login-heading'>Create an account</h3>
      <div className="box">
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="box">
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="box">
        <input
          type="tel"
          placeholder="Your Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className="box">
        <input
          type="password"
          placeholder="Your Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="box">
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn">
        Register now
      </button>
    </form>
  );
}

RegisterForm.propTypes = {
  active: PropTypes.bool,
}.isRequired;
