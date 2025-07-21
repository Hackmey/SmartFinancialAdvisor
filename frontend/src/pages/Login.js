// AuthComponents.js
import React, { useState } from 'react';
import './AuthStyles.css';
import { useNavigate } from 'react-router-dom';

// Login Component
export const Login = ({userData, setUserData}) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      })
      
      const data = await response.json();
      if (response.ok) {
          alert('Login successful!');
          console.log(data);
          localStorage.setItem('userData', JSON.stringify(data));
          setUserData(data);
          navigate('/dashboard');
        } else {
          alert(`Login failed: ${data.error || data.message}`);
        }
    }
    catch (error) {
      console.error('Error during login:', error);
      alert('Login failed. Please try again later.');
    }
  };

  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="auth-header">
          <h2 className="auth-title">Welcome Back</h2>
          <p className="auth-subtitle">Sign in to your account</p>
        </div>

        <form className="auth-form" onSubmit={handleLoginSubmit}>
          <div className="input-group">
            <label className="input-label">
              Email Address
            </label>
            <input
              type="email"
              required
              value={loginData.email}
              onChange={(e) => setLoginData({...loginData, email: e.target.value})}
              className="form-input"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label className="input-label">
              Password
            </label>
            <input
              type="password"
              required
              value={loginData.password}
              onChange={(e) => setLoginData({...loginData, password: e.target.value})}
              className="form-input"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="btn btn-login">
            Sign In
          </button>
        </form>

        <div className="switch-container">
          <p className="switch-text">
            Don't have an account?{' '}
            <button
              onClick={() => {navigate('/register')}}
              className="switch-link switch-link-blue"
            >
              Sign up here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

