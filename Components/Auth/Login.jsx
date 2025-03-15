import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Register.css';
import regimg from '../Assets/registerImage.jpg';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      toast.error("Please enter your Email", { position: "top-center" });
      return;
    }
    if (!formData.password) {
      toast.error("Please enter your Password", { position: "top-center" });
      return;
    }
    if (!formData.role) {
      toast.error("Please select your Role", { position: "top-center" });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        formData,
        { withCredentials: true }
      );
      toast.success("Login successful! Redirecting...", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        if (formData.role === 'Employer') {
          navigate('/admin');
        } else if (formData.role === 'Job Seeker') {
          navigate('/home');
        }
      }, 3000);

    } catch (error) {
      const errorMsg = error.response?.data?.message || "Invalid Email or Password!";

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
            <p>Don't have an account? Register now to get started!</p>
            <img src={regimg} alt="Welcome Illustration" /><br />
            <button className="sign-in-btn" onClick={() => navigate('/reg')}>Register</button>
          </div>
          <div className="right-section">
            <div className="reg-header">
              <h3>Login to your account</h3>
            </div><br /><br />

            <form onSubmit={handleLogin}>
              <div className="inputTag">
                <label>Email:</label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@company.com"
                  />
                  <MdOutlineMailOutline />
                </div>
              </div>

              <div className="inputTag">
                <label>Password:</label>
                <div className="input-wrapper">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Your secure password here"
                  />
                  <RiLock2Fill />
                </div>
              </div>

              <div className="inputTag">
                <label>Role:</label>
                <div className="input-wrapper">
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                  >
                    <option className="drop-down-reg" value="">Select Role</option>
                    <option className="drop-down-reg" value="Job Seeker">Job Seeker</option>
                    <option className="drop-down-reg" value="Employer">Employer</option>
                  </select>
                  <FaRegUser />
                </div>
              </div>

              <button className="register-button" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Login;
