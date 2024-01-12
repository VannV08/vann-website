import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login-signup-style.css';

const Signup = () => {
  
  return (
    <div className="login-background">
      <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
      <div className="logo">
        <img src="/photos/logo-removebg-preview.png" alt="Logo" className="img-fluid" />
      </div>
      <div className="login-box">
        <h2>Sign Up</h2>
        <form id="signupForm">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Name" id="nameInput" />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Email" id="emailInput" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" id="passwordInput" />
          </div>
          <button type="button" className="btn btn-success btn-block" id="signupButton" >
            Sign Up
          </button>
          <Link to="/" className="btn btn-primary btn-block">
              Back
          </Link>
        </form>
      </div>
    </div>
    </div> 
  );
};

export default Signup;