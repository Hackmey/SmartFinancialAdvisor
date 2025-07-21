import React, { useState } from 'react';
import './AuthStyles.css';
import { useNavigate } from 'react-router-dom';


export const Register = () => {
  const [signupData, setSignupData] = useState({
    name: '',
    monthlyIncome: '',
    monthlyExpenses: '',
    riskAppetite: '',
    financialGoal: '',
    investmentHorizon: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    console.log(signupData);
    try {
    const response = await fetch('http://localhost:5000/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupData),
    });

    const data = await response.json();

    if (response.ok) {
      alert('Signup successful!');
      console.log(data);
      navigate('/login'); 
    } else {
      alert(`Signup failed: ₹{data.error || data.message}`);
    }

  } catch (error) {
    console.error('Error during signup:', error);
    alert('Signup failed. Please try again later.');
  }
    
  };


  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="auth-header">
          <h2 className="auth-title">Create Account</h2>
          <p className="auth-subtitle">Join us to start your financial journey</p>
        </div>

        <form className="auth-form" onSubmit={handleSignupSubmit}>
          <div className="grid-row">
            <div className="input-group">
              <label className="input-label">
                Full Name
              </label>
              <input
                type="text"
                required
                value={signupData.name}
                onChange={(e) => setSignupData({...signupData, name: e.target.value})}
                className="form-input"
                placeholder="Enter your full name"
              />
            </div>

            <div className="input-group">
              <label className="input-label">
                Email Address
              </label>
              <input
                type="email"
                required
                value={signupData.email}
                onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                className="form-input"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="grid-row">
            <div className="input-group">
              <label className="input-label">
                Monthly Income (₹)
              </label>
              <input
                type="number"
                required
                value={signupData.monthlyIncome}
                onChange={(e) => setSignupData({...signupData, monthlyIncome: e.target.value})}
                className="form-input"
                placeholder="5000"
              />
            </div>

            <div className="input-group">
              <label className="input-label">
                Monthly Expenses (₹)
              </label>
              <input
                type="number"
                required
                value={signupData.monthlyExpenses}
                onChange={(e) => setSignupData({...signupData, monthlyExpenses: e.target.value})}
                className="form-input"
                placeholder="3000"
              />
            </div>
          </div>

          <div className="grid-row">
            <div className="input-group">
              <label className="input-label">
                Risk Appetite
              </label>
              <select
                value={signupData.riskAppetite}
                onChange={(e) => setSignupData({...signupData, riskAppetite: e.target.value})}
                className="form-select"
              >
                <option value="">Select your risk appetite</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div className="input-group">
              <label className="input-label">
                Investment Horizon (Years)
              </label>
              <input
                type="number"
                required
                min="1"
                max="50"
                value={signupData.investmentHorizon}
                onChange={(e) => setSignupData({...signupData, investmentHorizon: e.target.value})}
                className="form-input"
                placeholder="10"
              />
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">
              Financial Goal
            </label>
            <select
              required
              value={signupData.financialGoal}
              onChange={(e) => setSignupData({...signupData, financialGoal: e.target.value})}
              className="form-select"
            >
              <option value="">Select your financial goal</option>
              <option value="Retirement">Retirement</option>
              <option value="Buying a House">Buying a House</option>
              <option value="Children's Education">Children's Education</option>
              <option value="Emergency Fund">Emergency Fund</option>
              <option value="Wealth Building">Wealth Building</option>
              <option value="Starting a Business">Starting a Business</option>
              <option value="Travel">Travel</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="input-group">
            <label className="input-label">
              Password
            </label>
            <input
              type="password"
              required
              minLength="6"
              value={signupData.password}
              onChange={(e) => setSignupData({...signupData, password: e.target.value})}
              className="form-input"
              placeholder="Create a strong password"
            />
          </div>

          <button type="submit" className="btn btn-signup">
            Create Account
          </button>
        </form>

        <div className="switch-container">
          <p className="switch-text">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="switch-link switch-link-green"
            >
              Sign in here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
