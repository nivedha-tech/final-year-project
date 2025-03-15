import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaRegUser, FaPencilAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { FaPhoneFlip } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import regimg from '../Assets/registerImage.jpg';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    role: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!formData.name) {
      toast.error("Please enter your Name", { position: "top-center" });
      return;
    }
    if (!formData.email) {
      toast.error("Please enter your Email", { position: "top-center" });
      return;
    }
    if (!formData.phone) {
      toast.error("Please enter your Phone", { position: "top-center" });
      return;
    }
    if (!formData.password) {
      toast.error("Please enter your Password", { position: "top-center" });
      return;
    }
    if (!formData.role) {
      toast.error("Please select a Role", { position: "top-center" });
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:4000/api/v1/user/register',
        formData,
        { withCredentials: true }
      );

      toast.success("Registration successful! Redirecting to login", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setTimeout(() => {
        navigate("/login");
      }, 3000);

    } catch (error) {
      const errorMsg = error.response?.data?.message || "Something went wrong. Please try again.";

      toast.error(errorMsg, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div>
      <img src="/loginmainlogo.jpeg" alt="Logo" className="logo-reg" />
      <h1 className="reg-log-title">Join Hands, Your Future Starts Here!</h1>
      <div className='back-image-reg'></div>
      <section className="authPage">
        <div className="reg-container">
          <div className="left-section"><br />
            <h3>Welcome Back!</h3><br />
            <p>To keep connected with us please login with your personal info</p>
            <img src={regimg} alt="Welcome Illustration" /><br />
            <button className="sign-in-btn" onClick={() => navigate('/login')}>Sign In</button>
          </div>
          <div className="right-section">
            <div className="reg-header">
              <h3>Create a new account</h3><br /><br />
            </div>
            <form onSubmit={handleRegister}>
              <div className="inputTag">
                <label>Name:</label>
                <div className="input-wrapper">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='First Last Name' />
                  <FaPencilAlt />
                </div>
              </div>

              <div className="inputTag">
                <label>Email:</label>
                <div className="input-wrapper">
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='example@company.com' />
                  <MdOutlineMailOutline />
                </div>
              </div>

              <div className="inputTag">
                <label>Phone:</label>
                <div className="input-wrapper">
                  <input type="number" name="phone" value={formData.phone} onChange={handleChange} placeholder='+1 987 654 3210' />
                  <FaPhoneFlip />
                </div>
              </div>

              <div className="inputTag">
                <label>Password:</label>
                <div className="input-wrapper">
                  <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Your secure password here' />
                  <RiLock2Fill />
                </div>
              </div>

              <div className="inputTag">
                <label>Role:</label>
                <div className="input-wrapper">
                  <select className="register-select-input" name="role" value={formData.role} onChange={handleChange}>
                    <option className="drop-down-reg" value="">Select Role</option>
                    <option className="drop-down-reg" value="Job Seeker">Job Seeker</option>
                    <option className="drop-down-reg" value="Employer">Employer</option>
                  </select>
                  <FaRegUser />
                </div>
              </div>

              <button className="register-button" type="submit">Register</button>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Register;