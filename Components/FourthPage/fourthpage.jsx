import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./fourthpage.css";

const FourthPage = ({ savedData, setSavedData }) => {
  const [education, setEducation] = useState({
    universityName: "",
    degree: "",
    major: "",
    academicLevel: "",
    startDate: "",
    endDate: "",
    skills: "",
  });

  const [educationList, setEducationList] = useState(savedData.education || []);
  const navigate = useNavigate();

  useEffect(() => {
    if (!savedData.firstName || !savedData.careerObjective) {
      toast.error("Please complete the previous sections first.", { position: "top-center" });
      navigate("/thirdpage");
    }
  }, [savedData, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  };

  const handleSaveEducation = () => {
    if (!education.universityName) {
      toast.error("University Name is required", { position: "top-center" });
      return;
    }
    if (!education.degree) {
      toast.error("Degree is required", { position: "top-center" });
      return;
    }
    if (!education.major) {
      toast.error("Major is required", { position: "top-center" });
      return;
    }
    if (!education.academicLevel) {
      toast.error("Academic level is required", { position: "top-center" });
      return;
    }
    if (!education.startDate) {
      toast.error("Start date is required", { position: "top-center" });
      return;
    }
    if (!education.endDate) {
      toast.error("End date is required", { position: "top-center" });
      return;
    }
    if (!education.skills) {
      toast.error("Skills are required", { position: "top-center" });
      return;
    }

    const newEducation = { ...education };
    const updatedEducation = [...educationList, newEducation];
    setEducationList(updatedEducation);
    setSavedData({ ...savedData, education: updatedEducation });

    setEducation({
      universityName: "",
      degree: "",
      major: "",
      academicLevel: "",
      startDate: "",
      endDate: "",
      skills: "",
    });
    toast.success("Educational details saved successfully!", { position: "top-center" });
  };

  const handlePrevious = () => {
    navigate("/thirdpage");
  };

  const handleNext = () => {
    if (educationList.length === 0) {
      toast.error("Please add at least one educational detail before proceeding.", { position: "top-center" });
      return;
    }
    navigate("/fifthpage");
  };

  return (
    <div className="fourth-page-container">
      <ToastContainer />
      {/* Left Section */}
      <div className="left-section-fourth">
        <h2 className="section-title">Educational Details</h2>
        <p className="subtitle-resume">Add details about your educational background</p>

        <div className="input-row">
          <input
            type="text"
            name="universityName"
            id="universityName"
            value={education.universityName}
            placeholder="University Name"
            onChange={handleChange}
            className="input-field"
          />
          <input
            type="text"
            name="degree"
            id="degree"
            value={education.degree}
            placeholder="Degree"
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="input-row">
          <input
            type="text"
            name="major"
            id="major"
            value={education.major}
            placeholder="Major"
            onChange={handleChange}
            className="input-field"
          />
          <select
            name="academicLevel"
            id="academicLevel"
            value={education.academicLevel}
            onChange={handleChange}
            className="input-field"
          >
            <option value="">Academic Level</option>
            <option value="UG">UG</option>
            <option value="PG">PG</option>
          </select>
        </div>
        <div className="input-row">
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={education.startDate}
            onChange={handleChange}
            className="input-field"
          />
          <input
            type="date"
            name="endDate"
            id="endDate"
            value={education.endDate}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="skills">
          <label htmlFor="skills">Skills</label>
          <textarea
            name="skills"
            id="skills"
            value={education.skills}
            placeholder="List your skills"
            onChange={handleChange}
            className="textarea-field"
          />
        </div>
        <div className="button-group">
          <button onClick={handlePrevious} className="previous-btn-fourth">
            Previous
          </button>
          <button onClick={handleSaveEducation} className="save-btn-fourth">
            Save
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section-fourth">
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

            {/* Career Objective */}
            {savedData.careerObjective && (
              <>
                <div className="bottom-red-line"></div>
                <div className="preview-career-objective">
                  <h3>Career Objective</h3>
                  <p>{savedData.careerObjective}</p>
                </div>
              </>
            )}

            {/* Professional Experience */}
            {savedData.experiences && savedData.experiences.length > 0 && (
              <div className="preview-experience">
                <h3>Professional Experience</h3>
                {savedData.experiences.map((exp, index) => (
                  <div key={index} className="experience-item">
                    <h4>
                      {exp.positionTitle}, {exp.companyName}
                    </h4>
                    <p>
                      {exp.city}, {exp.state} | {exp.startDate} - {exp.endDate}
                    </p>
                    <p>{exp.summary}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Educational Details */}
            {educationList.length > 0 && (
              <div className="preview-education">
                <h3 className="subtitle-resume">Educational Details</h3>
                {educationList.map((edu, index) => (
                  <div key={index} className="education-item">
                    <h4>
                      {edu.degree}, {edu.universityName}
                    </h4>
                    <p>
                      {edu.major} | {edu.academicLevel} | {edu.startDate} - {edu.endDate}
                    </p>
                    <p>{edu.skills}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="resume-preview">
            <h3 className="resume-title">Resume Preview</h3>
          </div>
        )}
        <button onClick={handleNext} className="next-btn">
          Next →
        </button>
      </div>
    </div>
  );
};

export default FourthPage;