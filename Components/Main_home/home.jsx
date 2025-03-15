import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const MainHome = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container-resume">
      <header className="home-header-resume">
        <img src="/mainlogo.jpeg" alt="Logo" className="logo-resume" />

        <div className="title-container-resume">
          <h1 className="title-resume">AI Resume Builder & Job Finder</h1>
        </div>

        <button
          className="get-started-btn-resume"
          onClick={() => handleNavigation("/login")}
        >
          Get Started
        </button>
      </header>

      <main className="home-main-resume">
        <h2 className="main-title-resume">
          Build Your Resume <span>Effortlessly</span> with AI
        </h2>
        <p className="main-description-resume">
          Create a professional resume or find job opportunities with our
          advanced AI-powered tools. Start your career journey today.
        </p>

        <div className="action-buttons-resume">
          <button
            className="create-resume-btn-resume"
            onClick={() => handleNavigation("/dashboard")}
          >
            Create Resume
          </button>
          <button
            className="job-seeker-btn-resume"
            onClick={() => handleNavigation("/reg")}
          >
            Job Seeker
          </button>
        </div>
      </main>

      <footer className="home-footer-resume">
        <p>Featured On:</p>
        <div className="logos-resume">
          <span>LinkedIn</span>
          <span>Indeed</span>
          <span>CareerBuilder</span>
        </div>
      </footer>
    </div>
  );
};

export default MainHome;
