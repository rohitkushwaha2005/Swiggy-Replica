import React, { useState } from "react";
import "./SidePanelWithForm.css";
import Login from "./Login";
import Signup from "./Signup";

const SidePanel = ({ isOpen, toggleSidebar }) => {
  const [mode, setMode] = useState("login");

  const toggleMode = () => {
    setMode(mode === "login" ? "signup" : "login"); // Fix case sensitivity
  };

  return (
    <>
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}

      <div className={`modal-container ${isOpen ? "open" : ""}`}>
        <div className="modal-content">
          <span className="icon-close" onClick={toggleSidebar}>✖</span>

          <div className="modal-header">
            <div className="flex-col">
              <div className="modal-title">
                {mode === "login" ? "Login" : "Sign up"}
              </div>
              <div className="modal-or-create">
                or{" "}
                <a href="#" className="create-account-link" onClick={(e) => {
                    e.preventDefault();
                    toggleMode();
                  }}
                >
                  {mode === "login" ? "create an account" : "login to your account"}
                </a>
              </div>
            </div>
            <img
              className="modal-image"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
              alt="Modal illustration"
              width="110"
              height="110"
            />
          </div>

          {/* Ensure form has proper layout */}
          <div className="modal-form-wrapper">
  {mode === "login" ? <Login toggleSidebar={toggleSidebar} /> : <Signup toggleSidebar={toggleSidebar} />}
</div>

        </div>
      </div>
    </>
  );
};

export default SidePanel;
