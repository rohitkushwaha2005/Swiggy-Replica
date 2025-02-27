import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

const Signup = ({toggleSidebar}) => {
  const [formData, setFormData] = useState({
    mobile: "",
    name: "",
    email: "",
  });

  const [error, setError] = useState("");
  const navigate=useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (formData.mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (formData.name.trim().length < 3) {
      setError("Name should be at least 3 characters long.");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    localStorage.setItem("isAuthenticated", "true");
    console.log("Signup data:", formData);
    navigate("/");

    setError("");
    toggleSidebar();
  };

  return (
    <div>
      <form className="modal-form" onSubmit={handleSignup}>
        {/* Phone Number Field */}
        <div className="input-group">
          <input
            type="tel"
            name="mobile"
            className="input-field"
            maxLength="10"
            value={formData.mobile}
            onChange={handleChange}
            autoComplete="off"
            required
          />
          <label htmlFor="mobile" className="input-label">
            Phone number
          </label>
        </div>

        {/* Name Field */}
        <div className="input-group">
          <input
            type="text"
            name="name"
            className="input-field"
            value={formData.name}
            onChange={handleChange}
            autoComplete="off"
            required
          />
          <label htmlFor="name" className="input-label">
            Name
          </label>
        </div>

        {/* Email Field */}
        <div className="input-group">
          <input
            type="email"
            name="email"
            className="input-field"
            value={formData.email}
            onChange={handleChange}
            autoComplete="off"
            required
          />
          <label htmlFor="email" className="input-label">
            Email
          </label>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="signup-button-wrapper">
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </div>

        <div className="terms-conditions">
          By creating an account, I accept the{" "}
          <a href="/terms-and-conditions" className="terms-link">
            Terms & Conditions
          </a>{" "}
          &{" "}
          <a href="/privacy-policy" className="privacy-link">
            Privacy Policy
          </a>
        </div>
      </form>
    </div>
  );
};

export default Signup;
