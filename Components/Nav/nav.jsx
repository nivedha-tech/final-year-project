import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './nav.css';

const Nav = ({ onJobCategoryClick, onJobListClick, onTestClick }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownJobsOpen, setDropdownJobsOpen] = useState(false);
  const [dropdownPagesOpen, setDropdownPagesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleProfile = () => {
    navigate('/profile');
  };

  const toggleDropdownJobs = (e) => {
    e.preventDefault();

    if (isActive('/home')) {
      setDropdownJobsOpen((prev) => !prev);
    } else {
      navigate('/home');
      setDropdownPagesOpen(false);
      setDropdownJobsOpen(false);
    }
  };

  const toggleDropdownPages = (e) => {
    e.preventDefault();
    if (isActive('/home')) {
      setDropdownPagesOpen((prev) => !prev);
    } else {
      navigate('/home');
      setDropdownPagesOpen(false);
    }
    setDropdownJobsOpen(false);
  };

  useEffect(() => {
    setDropdownJobsOpen(false);
    setDropdownPagesOpen(false);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/mainlogo.jpeg" alt="Logo" className="logo-job" />
      </div>
      <button className={`navbar-toggler ${navbarOpen ? 'open' : ''}`} onClick={toggleNavbar}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`navbar-links ${navbarOpen ? 'show' : ''}`}>
        <Link to="/home" className={`nav-item ${isActive('/') ? 'active' : ''}`}>Home</Link>

        {/* Jobs Dropdown */}
        <div className="nav-item dropdown">
          <button
            className={`dropdown-toggle ${dropdownJobsOpen ? 'open' : ''}`}
            onClick={toggleDropdownJobs}
          >
            Jobs
          </button>
          <div className={`dropdown-menu ${dropdownJobsOpen ? 'show' : ''}`}>
            <button className="dropdown-item" onClick={onJobListClick}>Featured</button>
            <button className="dropdown-item" onClick={onJobListClick}>Full Time</button>
            <button className="dropdown-item" onClick={onJobListClick}>Part Time</button>
          </div>
        </div>

        {/* Pages Dropdown */}
        <div className="nav-item dropdown">
          <button
            className={`dropdown-toggle ${dropdownPagesOpen ? 'open' : ''}`}
            onClick={toggleDropdownPages}
          >
            Pages
          </button>
          <div className={`dropdown-menu ${dropdownPagesOpen ? 'show' : ''}`}>
            <button className="dropdown-item" onClick={onJobCategoryClick}>Job Category</button>
            <button className="dropdown-item" onClick={onTestClick}>Testimonial</button>
          </div>
        </div>
        <Link to="/about" className={`nav-item ${isActive('/about') ? 'active' : ''}`}>About</Link>

        <Link to="/contact" className={`nav-item ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
      </div>

  
    </nav>
  );
};

export default Nav;