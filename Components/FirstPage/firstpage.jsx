import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./firstpage.css";

const FirstPage = ({ savedData, setSavedData }) => {
  const [formData, setFormData] = useState({
    firstName: savedData.firstName || "",
    lastName: savedData.lastName || "",
    jobTitle: savedData.jobTitle || "",
    address: savedData.address || "",
    phone: savedData.phone || "",
    email: savedData.email || "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.firstName) {
      toast.error("First name should not be empty", { position: "top-center" });
      return;
    }

    if (!formData.lastName) {
      toast.error("Last name should not be empty", { position: "top-center" });
      return;
    }

    if (!formData.jobTitle) {
      toast.error("Job title should not be empty", { position: "top-center" });
      return;
    }

    if (!formData.address) {
      toast.error("Address should not be empty", { position: "top-center" });
      return;
    }

    if (!formData.phone) {
      toast.error("Contact should not be empty", { position: "top-center" });
      return;
    }

    if (!phoneRegex.test(formData.phone)) {
      toast.error("Contact must contain 10 digits", { position: "top-center" });
      return;
    }

    if (!formData.email) {
      toast.error("Email should not be empty", { position: "top-center" });
      return;
    }

    if (!emailRegex.test(formData.email)) {
      toast.error("Email should be in correct format", { position: "top-center" });
      return;
    }

    setSavedData({ ...savedData, ...formData });
    toast.success("Details saved successfully!", { position: "top-center" });
  };

  const handleNext = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.jobTitle ||
      !formData.phone ||
      !formData.email
    ) {
      toast.error("Please fill in all required fields and save before proceeding.", { position: "top-center" });
      return;
    }
    setSavedData({ ...savedData, ...formData });
    navigate("/secondpage");
  };

  const handlePrevious = () => {
    navigate("/dashboard");
  };

  return (
    <div className="first-page-container">
      <ToastContainer />
      {/* Left Section */}
      <div className="left-section-resume">
        <h2 className="section-title">Personal Information</h2>
        <form className="personal-form">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group full-width">
            <label>Job Title</label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              placeholder="Job Title"
              value={formData.jobTitle}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group full-width">
            <label>Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="button-group">
            <button
              type="button"
              className="previous-btn"
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              type="button"
              className="save-btn"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </form>
      </div>

      {/* Right Section */}
      <div className="right-section-resume">
        <div className="top-red-line"></div>
        {savedData.firstName ? (
          <div className="resume-preview">
            <h3 className="preview-name">
              {savedData.firstName} {savedData.lastName}
            </h3>
            <p className="preview-job">{savedData.jobTitle}</p>
            <div className="preview-contact-row">
              <span>{savedData.phone}</span>
              <span>{savedData.address}</span>
              <span>{savedData.email}</span>
            </div>
          </div>
        ) : (
          <div className="resume-preview">
            <h3 className="resume-title">Resume Preview</h3>
          </div>
        )}
        <button
          type="button"
          className="btn next-btn"
          onClick={handleNext}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default FirstPage;