import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import './MyApplications.css';

const MyApplications = () => {
  const { user } = useContext(Context);
  const [applications, setApplications] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [resumeImageUrl, setResumeImageUrl] = useState("");

  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    try {
      if (user && user.role === "Employer") {
        axios
          .get("http://localhost:4000/api/v1/application/employer/getall", {
            withCredentials: true,
          })
          .then((res) => {
            setApplications(res.data.applications);
          });
      } else {
        axios
          .get("http://localhost:4000/api/v1/application/jobseeker/getall", {
            withCredentials: true,
          })
          .then((res) => {
            setApplications(res.data.applications);
          });
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }, [isAuthorized, user]);

  useEffect(() => {
    if (!isAuthorized) {
      navigateTo("/");
    }
  }, [isAuthorized, navigateTo]);

  const deleteApplication = (id) => {
    try {
      axios
        .delete(`http://localhost:4000/api/v1/application/delete/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          toast.success(res.data.message);
          setApplications((prevApplication) =>
            prevApplication.filter((application) => application._id !== id)
          );
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const openModal = (imageUrl) => {
    setResumeImageUrl(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <h1 className="my-applications-heading">My Applications</h1>

      {user && user.role === "Job Seeker" ? (
        <div className="my-applications-container">
          {applications.length <= 0 ? (
            <h4 className="my-applications-heading-two">No Applications Found</h4>
          ) : (
            applications.map((element) => {
              return (
                <JobSeekerCard
                  element={element}
                  key={element._id}
                  deleteApplication={deleteApplication}
                  openModal={openModal}
                />
              );
            })
          )}
        </div>
      ) : (
        <div className="my-applications-container">
          <h1>Applications From Job Seekers</h1>
          {applications.length <= 0 ? (
            <h4>No Applications Found</h4>
          ) : (
            applications.map((element) => {
              return (
                <EmployerCard
                  element={element}
                  key={element._id}
                  openModal={openModal}
                />
              );
            })
          )}
        </div>
      )}

    </>
  );
};

const JobSeekerCard = ({ element, deleteApplication, openModal }) => {
  return (
    <div className="my-applications-job_seeker_card">
      <div className="my-applications-detail">
        <p className="my-application-p-text">
          <span>Name:</span> {element.name}
        </p>
        <p className="my-application-p-text">
          <span>Email:</span> {element.email}
        </p>
        <p className="my-application-p-text">
          <span>Phone:</span> {element.phone}
        </p>
        <p className="my-application-p-text">
          <span>Address:</span> {element.address}
        </p>
        <p className="my-application-p-text">
          <span>CoverLetter:</span> {element.coverLetter}
        </p>
      </div>
      <div className="my-applications-resume">
        <img
          src={element.resume.url}
          alt="resume"
          onClick={() => openModal(element.resume.url)}
        />
      </div>

      <div className="my-applications-btn-area">
        <button
          className="my-applications-delete-button"
          onClick={() => deleteApplication(element._id)}
        >
          Delete Application
        </button>
      </div>

    </div>
  );
};

const EmployerCard = ({ element, openModal }) => {
  return (
    <div className="my-applications-employer_card">
      <div className="my-applications-detail">
        <p className="my-application-p-text">
          <span>Name:</span> {element.name}
        </p>
        <p className="my-application-p-text">
          <span>Email:</span> {element.email}
        </p>
        <p className="my-application-p-text">
          <span>Phone:</span> {element.phone}
        </p>
        <p className="my-application-p-text">
          <span>Address:</span> {element.address}
        </p>
        <p className="my-application-p-text">
          <span>CoverLetter:</span> {element.coverLetter}
        </p>
      </div>
      <div className="my-applications-resume">
        <img
          src={element.resume.url}
          alt="resume"
          onClick={() => openModal(element.resume.url)}
        />
      </div>
    </div>
  );
};

export default MyApplications;