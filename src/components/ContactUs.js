// ContactUs.js
import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset errors
        setErrors({
            name: '',
            email: '',
            message: '',
        });

        let formValid = true;

        // Validate name
        if (formData.name.trim() === '') {
            formValid = false;
            setErrors((prevErrors) => ({
                ...prevErrors,
                name: 'Name is required.',
            }));
        }

        // Validate email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(formData.email)) {
            formValid = false;
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Please enter a valid email address.',
            }));
        }

        // Validate message
        if (formData.message.trim() === '') {
            formValid = false;
            setErrors((prevErrors) => ({
                ...prevErrors,
                message: 'Message cannot be empty.',
            }));
        }

        // If form is valid, show success message
        if (formValid) {
            alert('Form submitted successfully!');
            // Here, you can add the logic for form submission (e.g., sending data to the server)
            // Reset form data if necessary
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        }
    };

    return (
        <section id="contact-us">
            <div className="container">
                <h2>Contact Us</h2>
                <p>If you have any questions, feel free to reach out to us!</p>

                <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <span className="error">{errors.name}</span>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <span className="error">{errors.email}</span>
                    </div>
                    <div className="input-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write your message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <span className="error">{errors.message}</span>
                    </div>
                    <button type="submit" id="submit-btn">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
