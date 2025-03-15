import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../index";
import './Applications.css';
import Footer from '../Footer/footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Application = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [resume, setResume] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const { isAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();
  const { id } = useParams();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setResume(file);

    if (file && !["application/pdf", "image/png", "image/jpeg", "image/webp"].includes(file.type)) {
      toast.error("Invalid file type. Only PDF, PNG, JPG, and WEBP are allowed.");
      setResume(null);
      return;
    }

    if (file && file.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview("");
    }
  };

  const handleApplication = async (e) => {
    e.preventDefault();

    if (!name) {
      toast.error("Please fill in your Name.");
      return;
    }
    if (!email) {
      toast.error("Please fill in your Email.");
      return;
    }
    if (!phone) {
      toast.error("Please fill in your Phone Number.");
      return;
    }
    if (!address) {
      toast.error("Please fill in your Address.");
      return;
    }
    if (!coverLetter) {
      toast.error("Please provide a Cover Letter.");
      return;
    }
    if (!resume) {
      toast.error("Please upload your Resume.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("coverLetter", coverLetter);
    formData.append("resume", resume);
    formData.append("jobId", id);

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/application/post",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setName("");
      setEmail("");
      setCoverLetter("");
      setPhone("");
      setAddress("");
      setResume(null);
      setPreview("");
      toast.success("Application Submitted Successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,

      });

      setTimeout(() => {
        navigateTo("/job/getall");
      }, 3000);

    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthorized || (user && user.role === "Employer")) {
    navigateTo("/");
  }

  return (
    <div className="appl-page">
      <section className="job-application">
        <div className="job-container"><br />
          <h3 className="Application-heading">Application Form</h3>
          <form className='application-form' onSubmit={handleApplication}>
            <input
              className='appli-input'
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className='appli-input'
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className='appli-input'
              type="number"
              placeholder="Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              className='appli-input'
              type="text"
              placeholder="Your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <textarea
              className='appli-textarea'
              placeholder="Cover Letter..."
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
            />

            <div>
              <label className='appli-label' style={{ textAlign: "start", display: "block", fontSize: "20px" }}>Select Resume</label>
              <input
                className='appli-input'
                type="file"
                accept=".pdf, .jpg, .png, .webp"
                onChange={handleFileChange}
                style={{ width: "100%" }}
              />
            </div>

            <button
              className='application-submit-btn'
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Send Application"}
            </button>
          </form>
        </div>
      </section>
      <Footer />

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Application;