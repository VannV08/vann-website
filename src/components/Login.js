import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login-signup-style.css';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add logic for handling login (e.g., API call)
    console.log('Login clicked with:', email, password);
  };

  return (
    <div className="login-background">
      <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
      <div className="logo">
        <img src="/photos/logo-removebg-preview.png" alt="Logo" className="img-fluid" />
      </div>
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              id="loginEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="loginPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success btn-block" id="loginButton">
            Login
          </button>
          <Link to="/" className="btn btn-primary btn-block">
              Back
          </Link>
        </form>
        <p className='mt-2'>
          Don't have an account? <Link to="/signup" className="text-danger font-weight-bold" id="donthaveaccount">Sign up</Link>
        </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
