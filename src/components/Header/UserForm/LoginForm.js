
 import PropTypes from 'prop-types';
 import './UserForm.css';
import React, { useState } from 'react';
import { loginUser } from '../UserForm/AuthService';

export default function LoginForm(props) {
  const { active } = props;
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    loginUser(formData.email, formData.password);
    // Reset the form after submission
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div id='login'>
    <form  className={`login-form ${active ? 'active' : ''}`} onSubmit={handleSubmit}>
      <h3 className='login-heading'>Login now</h3>
      <div  className="box">
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
          type="password"
          placeholder="Your Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn">
        Login now
      </button>
    </form>
    </div>
  );
}

LoginForm.propTypes = {
  active: PropTypes.bool,
}.isRequired;
