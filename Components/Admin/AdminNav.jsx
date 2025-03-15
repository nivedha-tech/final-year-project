import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const AdminNav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className='Adminnav-page'>
      <nav className="navbar">
        <div className="navbar-brand">
        <img src="/mainlogo.jpeg" alt="Logo" className="logo-job" />
        </div>

        {/* Navbar links */}
        <div className={`navbar-links ${navbarOpen ? 'show' : ''}`}>
          <NavLink
            to="/admin"
            className="nav-item"
            activeClassName="active"
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/job/post"
            className="nav-item"
            activeClassName="active"
          >
            Post Job
          </NavLink>

         

        </div>
      </nav>
    </div>
  );
};

export default AdminNav;
