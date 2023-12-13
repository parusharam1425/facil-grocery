import React, { useState } from 'react';
import UserForm from './LoginForm';
import RegisterForm from './Register';
export default function AuthPage() {
  const [isLoginActive, setLoginActive] = useState(true);

  const toggleForm = () => {
    setLoginActive(!isLoginActive);
  };

  return (
    <div

    className="auth-page"
    data-aos="fade-down"
    data-aos-easing="ease-out"
    data-aos-duration="1000">
      
      {isLoginActive ? (
        <UserForm active={true} />
      ) : (
        <RegisterForm active={true} />
      )}
      <p onClick={toggleForm} className='register_form'>
        {isLoginActive ? 'Don\'t have an account? Register now.' : 'Already have an account? Login now.'}
      </p>
    </div>
  );
}

AuthPage.propTypes = {
};
