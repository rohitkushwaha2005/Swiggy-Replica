import React from 'react';

function SignUpForm({ toggleForm }) {
  return (
    <div className="form-container sign-up">
      <form>
        <h2>Sign Up</h2>
        <div className="form-group">
          <input type="text" required />
          <i className="fas fa-user"></i>
          <label>Username</label>
        </div>
        <div className="form-group">
          <input type="email" required />
          <i className="fas fa-at"></i>
          <label>Email</label>
        </div>
        <div className="form-group">
          <input type="password" required />
          <i className="fas fa-lock"></i>
          <label>Password</label>
        </div>
        <div className="form-group">
          <input type="password" required />
          <i className="fas fa-lock"></i>
          <label>Confirm Password</label>
        </div>
        <button type="submit" className="btn">
          Sign Up
        </button>
        <div className="link">
          <p>
            You already have an account?{' '}
            <a href="#" className="signin-link" onClick={toggleForm}>
              Sign In
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
