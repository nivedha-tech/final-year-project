import React from "react";
import { useNavigate } from "react-router-dom";
import "./finalpage.css";
import html2canvas from "html2canvas";

const FinalPage = ({ savedData }) => {
  const navigate = useNavigate();

  const handleDownload = () => {
    const content = document.getElementById("resume-content");

    const A4Width = 210;
    const A4Height = 297;
    const dpi = 96;

    const canvasWidth = (A4Width * dpi) / 25.4;
    const canvasHeight = (A4Height * dpi) / 25.4;

    html2canvas(content, {
      scale: 2,
      width: canvasWidth,
      height: canvasHeight,
      x: 0,
      y: 0,
    }).then((canvas) => {
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "Resume.png";
      link.click();
    });
  };

  const handleShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    switch (platform) {
      case "whatsapp":
        window.open(`https://wa.me/?text=${url}`, "_blank");
        break;
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?url=${url}`, "_blank");
        break;
      case "linkedin":
        window.open(`https://www.linkedin.com/shareArticle?url=${url}`, "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="final-page-container">
        <div id="resume-content" className="resume-content">
          {/* Resume Preview Section */}
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
              <div className="bottom-red-line-final"></div>
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
          {savedData.education && savedData.education.length > 0 && (
            <div className="preview-education">
              <h3 className="subtitle-resume">Educational Details</h3>
              {savedData.education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h4>
                    {edu.degree}, {edu.universityName}
                  </h4>
                  <p>
                    {edu.major} | {edu.startDate} - {edu.endDate}
                  </p>
                  <p>{edu.skills}</p>
                </div>
              ))}
            </div>
          )}

          {/* Certifications */}
          {savedData.certifications && savedData.certifications.length > 0 && (
            <div className="preview-certifications">
              <h3>Certifications</h3>
              {savedData.certifications.map((cert, index) => (
                <div key={index} className="certification-item">
                  <h4>{cert.certificateName} - {cert.title}</h4>
                  <p>{cert.duration} | {cert.date}</p>
                  <p>{cert.description}</p>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Download & Share Buttons */}
        <div className="button-group-final">
          <button onClick={handleDownload} className="download-btn">
            Download
          </button>
          <div className="share-dropdown">
            <button className="share-btn">Share</button>
            <div className="dropdown-content">
              <button onClick={() => handleShare("whatsapp")}>WhatsApp</button>
              <button onClick={() => handleShare("twitter")}>Twitter</button>
              <button onClick={() => handleShare("linkedin")}>LinkedIn</button>
            </div>
          </div>
          <button onClick={() => navigate("/")} className="home-btn">
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalPage;