import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./fifthpage.css";

const FifthPage = ({ savedData, setSavedData }) => {
  const [certification, setCertification] = useState({
    certificateName: "",
    title: "",
    duration: "",
    date: "",
    description: "",
  });
  const [certificationsList, setCertificationsList] = useState(savedData.certifications || []);
  const navigate = useNavigate();

  useEffect(() => {
    if (!savedData.firstName || !savedData.careerObjective) {
      toast.error("Please complete the previous sections first.", { position: "top-center" });
      navigate("/fourthpage");
    }
  }, [savedData, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCertification({ ...certification, [name]: value });
  };

  const generateDescription = () => {
    const { certificateName, title } = certification;

    if (!certificateName || !title) {
      toast.error("Please enter Certificate Name and Title first.", { position: "top-center" });
      return;
    }

    const aiGeneratedDescription = `This certification in ${certificateName} - ${title} has equipped me with in-depth knowledge and hands-on experience, enhancing my skills in the respective domain.`;

    setCertification({ ...certification, description: aiGeneratedDescription });
    toast.success("AI-generated description added!", { position: "top-center" });
  };

  const handleSaveCertification = () => {
    if (!certification.certificateName) {
      toast.error("Certificate Name is required.", { position: "top-center" });
      return;
    }
    if (!certification.title) {
      toast.error("Title is required.", { position: "top-center" });
      return;
    }
    if (!certification.duration) {
      toast.error("Duration is required.", { position: "top-center" });
      return;
    }
    if (!certification.date) {
      toast.error("Date is required.", { position: "top-center" });
      return;
    }
    if (!certification.description) {
      toast.error("Description is required.", { position: "top-center" });
      return;
    }

    const updatedCertifications = [...certificationsList, { ...certification }];
    setCertificationsList(updatedCertifications);
    setSavedData({ ...savedData, certifications: updatedCertifications });
    setCertification({
      certificateName: "",
      title: "",
      duration: "",
      date: "",
      description: "",
    });
    toast.success("Certification details saved successfully!", { position: "top-center" });
  };

  const handlePrevious = () => {
    navigate("/fourthpage");
  };

  const handleNext = () => {
    if (certificationsList.length === 0) {
      toast.error("Please add at least one certification before proceeding.", { position: "top-center" });
      return;
    }
    navigate("/finalpage");
  };

  return (
    <div>
      <div className="fifth-page-container">
        <ToastContainer />
        <div className="left-section-fifth">
          <h2 className="section-title">Certifications</h2>
          <p className="subtitle-resume">Add details about your certifications</p>

          <div className="input-row">
            <input
              type="text"
              name="certificateName"
              id="certificateName"
              value={certification.certificateName}
              placeholder="Certificate Name"
              onChange={handleChange}
              className="input-field"
            />
            <input
              type="text"
              name="title"
              id="title"
              value={certification.title}
              placeholder="Title"
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="input-row">
            <input
              type="text"
              name="duration"
              id="duration"
              value={certification.duration}
              placeholder="Duration"
              onChange={handleChange}
              className="input-field"
            />
            <input
              type="date"
              name="date"
              id="date"
              value={certification.date}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div className="description">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              value={certification.description}
              placeholder="What did you learn?"
              onChange={handleChange}
              className="textarea-field"
            />
          </div>

          <div className="button-row">
            <button onClick={generateDescription} className="ai-btn">Generate</button>
            <button onClick={handlePrevious} className="previous-btn-fifth">Previous</button>
            <button onClick={handleSaveCertification} className="save-btn-fifth">Save</button>
          </div>
        </div>

        <div className="right-section-fifth">
          <div className="top-red-line"></div>
          {savedData.firstName ? (
            <div className="resume-preview">
              <h3 className="preview-name">{savedData.firstName} {savedData.lastName}</h3>
              <p className="preview-job">{savedData.jobTitle}</p>
              <div className="preview-contact-row">
                <span>{savedData.phone}</span>
                <span>{savedData.address}</span>
                <span>{savedData.email}</span>
              </div>

              {savedData.careerObjective && (
                <>
                  <div className="bottom-red-line"></div>
                  <div className="preview-career-objective">
                    <h3>Career Objective</h3>
                    <p>{savedData.careerObjective}</p>
                  </div>
                </>
              )}

              {savedData.experiences?.length > 0 && (
                <div className="preview-experience">
                  <h3>Professional Experience</h3>
                  {savedData.experiences.map((exp, index) => (
                    <div key={index} className="experience-item">
                      <h4>{exp.positionTitle}, {exp.companyName}</h4>
                      <p>{exp.city}, {exp.state} | {exp.startDate} - {exp.endDate}</p>
                      <p>{exp.summary}</p>
                    </div>
                  ))}
                </div>
              )}

              {savedData.education?.length > 0 && (
                <div className="preview-education">
                  <h3 className="subtitle-resume">Educational Details</h3>
                  {savedData.education.map((edu, index) => (
                    <div key={index} className="education-item">
                      <h4>{edu.degree}, {edu.universityName}</h4>
                      <p>{edu.major} | {edu.academicLevel} | {edu.startDate} - {edu.endDate}</p>
                      <p>{edu.skills}</p>
                    </div>
                  ))}
                </div>
              )}

              {certificationsList.length > 0 && (
                <div className="preview-certifications">
                  <h3>Certifications</h3>
                  {certificationsList.map((cert, index) => (
                    <div key={index} className="certification-item">
                      <h4>{cert.certificateName} - {cert.title}</h4>
                      <p>{cert.duration} | {cert.date}</p>
                      <p>{cert.description}</p>
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
          <button onClick={handleNext} className="next-btn">Next →</button>
        </div>
      </div>
    </div>
  );
};

export default FifthPage;