import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './dashboard.css'

const Dashboard = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const navigate = useNavigate();

  const handleAddClick = () => {
    setShowPopup(true);
  };

  const handleCancelClick = () => {
    setShowPopup(false);
    setJobTitle("");
  };

  const handleCreateClick = () => {
    if (jobTitle.trim()) {
      navigate("/firstpage");
    }
  };

  return (
    <div className="dashboard-container-resume">
      <header className="dashboard-header-resume">
        <img src="/mainlogo.jpeg" alt="Logo" className="dashboard-logo" />
        <h1 className="dashboard-title">Dashboard</h1>
      </header>

      <main className="dashboard-main">
        <h2 className="section-title">My Resume</h2>
        <p className="section-subtitle">
          Start creating AI resume to your next Job role
        </p>

        <div className="resume-grid">
          <div className="card add-card" onClick={handleAddClick}>
            <div className="add-icon">+</div>
          </div>

          <div className="card">
            <h3 className="card-title">My First Resume</h3>
          </div>

          <div className="card">
            <h3 className="card-title">Full Stack Developer</h3>
          </div>
        </div>
      </main>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3 className="popup-title">Create New Resume</h3>
            <input
              type="text"
              className="popup-input"
              placeholder="Enter Job Title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
            <div className="popup-buttons">
              <button className="popup-btn cancel" onClick={handleCancelClick}>
                Cancel
              </button>
              <button className="popup-btn create" onClick={handleCreateClick}>
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;