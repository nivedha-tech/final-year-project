import React, { useContext, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import "./PostJob.css";
import { Context } from "../../index";

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [fixedSalary, setFixedSalary] = useState("");
  const [salaryType, setSalaryType] = useState("default");
  const [loading, setLoading] = useState(false);

  const { isAuthorized, user } = useContext(Context);

  const handleJobPost = async (e) => {
    e.preventDefault();

    if (!title) {
      toast.error("Please enter Job Title", { position: "top-center" });
      return;
    }
    if (!category) {
      toast.error("Please select a Category", { position: "top-center" });
      return;
    }
    if (!country) {
      toast.error("Please enter Country", { position: "top-center" });
      return;
    }
    if (!city) {
      toast.error("Please enter City", { position: "top-center" });
      return;
    }
    if (!location) {
      toast.error("Please enter Job Location", { position: "top-center" });
      return;
    }
    if (salaryType === "default") {
      toast.error("Please select Salary Type", { position: "top-center" });
      return;
    }
    if (salaryType === "Fixed Salary" && !fixedSalary) {
      toast.error("Please enter Fixed Salary", { position: "top-center" });
      return;
    }
    if (salaryType === "Ranged Salary" && (!salaryFrom || !salaryTo)) {
      toast.error("Please enter Salary Range", { position: "top-center" });
      return;
    }
    if (!description) {
      toast.error("Please enter Job Description", { position: "top-center" });
      return;
    }

    setLoading(true);

    let jobData;
    if (salaryType === "Fixed Salary") {
      jobData = { title, description, category, country, city, location, fixedSalary };
    } else {
      jobData = { title, description, category, country, city, location, salaryFrom, salaryTo };
    }

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/job/post",
        jobData,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      setTitle("");
      setDescription("");
      setCategory("");
      setCountry("");
      setCity("");
      setLocation("");
      setSalaryFrom("");
      setSalaryTo("");
      setFixedSalary("");
      setSalaryType("default");

      toast.success("Job Posted Successfully!", { position: "top-center" });
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!", { position: "top-center" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="job-post-page">
      <div className="job-post-container">
        <h3 className="post-job-heading">POST NEW JOB</h3>
        <form className="job-post-form" onSubmit={handleJobPost}>
          <div className="job-post-wrapper">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Job Title"
              className="job-post-title"
            />
            <select className="job-post-title" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select Category</option>
              <option value="Graphics & Design">Graphics & Design</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Frontend Web Development">Frontend Web Development</option>
              <option value="MERN Stack Development">MERN STACK Development</option>
              <option value="Account & Finance">Account & Finance</option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>
              <option value="Video Animation">Video Animation</option>
              <option value="Education Consultant">Teaching & Education</option>
              <option value="Data Analyst">Human Resource Management</option>
              <option value="Data Entry Operator">Data Entry Operator</option>
              <option value="Banking & Finance">Banking & Finance</option>
            </select>
          </div>
          <div className="job-post-wrapper">
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country"
              className="job-post-title"
            />
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              className="job-post-title"
            />
          </div>
          <div className="job-post-wrapper">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className="job-post-title"
            />
          </div>
          <div className="job-post-salary_wrapper">
            <select className="job-post-select" value={salaryType} onChange={(e) => setSalaryType(e.target.value)}>
              <option value="default">Select Salary Type</option>
              <option value="Fixed Salary">Fixed Salary</option>
              <option value="Ranged Salary">Ranged Salary</option>
            </select>
            <div>
              {salaryType === "default" ? (
                <p className="job-post-p">Please provide Salary Type *</p>
              ) : salaryType === "Fixed Salary" ? (
                <div className="job-post-fixed-salary-wrapper">
                  <input
                    className="job-post-fixed-salary"
                    type="number"
                    placeholder="Enter Fixed Salary"
                    value={fixedSalary}
                    onChange={(e) => setFixedSalary(e.target.value)}
                  />
                </div>
              ) : (
                <div className="ranged_salary">
                  <input
                    className="job-post-title"
                    type="number"
                    placeholder="Salary From"
                    value={salaryFrom}
                    onChange={(e) => setSalaryFrom(e.target.value)}
                  />
                  <input
                    className="job-post-title"
                    type="number"
                    placeholder="Salary To"
                    value={salaryTo}
                    onChange={(e) => setSalaryTo(e.target.value)}
                  />
                </div>
              )}
            </div>
          </div>
          <textarea
            className="job-post-descp"
            rows="10"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Job Description"
          />
          <button className="job-post-button" type="submit" disabled={loading}>
            {loading ? "Posting..." : "Create Job"}
          </button>
        </form>
      </div>
      <ToastContainer 
  position="top-center" 
  autoClose={3000} 
  closeOnClick 
  pauseOnHover 
  draggable 
  hideProgressBar={false}  
/>
    </div>
  );
};

export default PostJob;
