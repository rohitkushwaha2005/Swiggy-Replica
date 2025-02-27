import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Header.css'; // Make sure to create a corresponding CSS file
import { Link, useNavigate } from "react-router-dom";


function Header({ toggleSidebar }) {

  const navigate = useNavigate();

  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated")) || false;

  const handleLogoutClick = () => {
    localStorage.removeItem("isAuthenticated");
    window.location.reload(); // Refresh to apply changes
  };

  
  const handleSignUpClick = () => {
    toggleSidebar(); 
    setTimeout(() => {
      navigate('/Signup');
    }, 300); // 300ms delay to ensure sidebar toggle effect is seen
  };
  
  return (
    <header>
      <div className="nav-bar clearfix">
        <div className="top-bar">
          <div className="logo">
            <a href="/">
              <img src="/images/Swiggy_logo_bml6he.png" alt="Swiggy Logo" />
            </a>
          </div>
          <div className="nav-options">
            <div className='font'><a href="./components"><h4>Swiggy Corporate</h4></a></div>
            <div className='font-bold'>
              <h4>
                <Link to="/partnerWithUs">Partner with us</Link>
              </h4>
            </div>
            <div className="get-app">
              <a href="https://example.com">
                Get the App <ArrowUpRight />
              </a>
            </div>
            {isAuthenticated ? (
  <div className="sign-up" onClick={handleLogoutClick}>
    Logout
  </div>
) : (
  <div className="sign-up" onClick={handleSignUpClick}>
    Sign In
  </div>
)}

            
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
