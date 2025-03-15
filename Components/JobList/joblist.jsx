import React, { useState } from 'react';
import './joblist.css';
import logo1 from '../Assets/com-logo-1.jpg';
import logo2 from '../Assets/com-logo-2.jpg';
import logo3 from '../Assets/com-logo-3.jpg';
import logo4 from '../Assets/com-logo-4.jpg';
import logo5 from '../Assets/com-logo-5.jpg';

const JobList = React.forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState('tab-1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div ref={ref}>
      <div className="container" ref={ref}>
        <h1 className="title">Job Listing</h1>

        <div className="tabs">
          <ul className="tab-links">
            <li
              className={`tab-link ${activeTab === 'tab-1' ? 'active' : ''}`}
              onClick={() => handleTabClick('tab-1')}
            >
              Featured
            </li>
            <li
              className={`tab-link ${activeTab === 'tab-2' ? 'active' : ''}`}
              onClick={() => handleTabClick('tab-2')}
            >
              Full Time
            </li>
            <li
              className={`tab-link ${activeTab === 'tab-3' ? 'active' : ''}`}
              onClick={() => handleTabClick('tab-3')}
            >
              Part Time
            </li>
          </ul>
        </div>

        <div className="tab-content">
          {activeTab === 'tab-1' && (
            <div className="tab-item">
              <JobItem
                logo={logo1}
                title="Software Engineer"
                location="New York, USA"
                type="Full Time"
                salary="$123 - $456"
                deadline="01 Jan, 2045"
              />
              <JobItem
                logo={logo2}
                title="Marketing Manager"
                location="New York, USA"
                type="Full Time"
                salary="$123 - $456"
                deadline="01 Jan, 2045"
              />
              <JobItem
                logo={logo4}
                title="Frontend Developer"
                location="New York, USA"
                type="Full Time"
                salary="$456 - $500"
                deadline="01 Apr, 2045"
              />
              <JobItem
                logo={logo5}
                title="Data Analyst"
                location="New York, USA"
                type="Full Time"
                salary="$500 - $800"
                deadline="01 Feb, 2045"
              />
            </div>
          )}
          {activeTab === 'tab-2' && (
            <div className="tab-item">
              <JobItem
                logo={logo3}
                title="Product Designer"
                location="Los Angeles, USA"
                type="Full Time"
                salary="$150 - $500"
                deadline="01 Feb, 2045"
              />
              <JobItem
                logo={logo5}
                title="WordPress Developer"
                location="New York, USA"
                type="Full Time"
                salary="$150 - $500"
                deadline="01 Jan, 2045"
              />
              <JobItem
                logo={logo1}
                title="System Manager"
                location="California, USA"
                type="Full Time"
                salary="$90 - $200"
                deadline="01 Jan, 2045"
              />
            </div>
          )}
          {activeTab === 'tab-3' && (
            <div className="tab-item">
              <JobItem
                logo={logo4}
                title="Graphic Designer"
                location="San Francisco, USA"
                type="Part Time"
                salary="$100 - $300"
                deadline="15 Jan, 2045"
              />
              <JobItem
                logo={logo5}
                title="Creative Director"
                location="San Francisco, USA"
                type="Part Time"
                salary="$100 - $300"
                deadline="15 Jan, 2045"
              />
            </div>
          )}
        </div>
      </div> </div>
  );
});

const JobItem = ({ logo, title, location, type, salary, deadline }) => {
  return (
    <div className="job-item">
      <div className="job-details">
        <img className="company-logo" src={logo} alt="Company Logo" />
        <div className="job-info">
          <h5>{title}</h5>
          <p>
            <span className="location">{location}</span> |{' '}
            <span className="type">{type}</span> |{' '}
            <span className="salary">{salary}</span>
          </p>
        </div>
      </div>
      <div className="job-actions">
        <button className="btn btn-favorite">Show Job Description</button>
        <button className="btn btn-apply">Apply Now</button>
        <small>Deadline: {deadline}</small>
      </div>
    </div>

  );
};

export default JobList;
