import React, { useState } from "react";
import Contact from "../Contact/contact";
import Map from "../Map/maps";
import "./maincontact.css";

const MainContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <br /><br /><br /><br /><br />
      <Contact />
      <div>
        <h1 className="main-contact-heading">Contact For Any Query</h1><br /><br />
        <Map />
        <form className="main-contact-form" onSubmit={handleSubmit}><h2 className="query-form-heading">QUERY FORM</h2><br /><br />

          <div className="main-contact-form-group">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              className="main-contact-form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required />
          </div>
          <div className="main-contact-form-group">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              className="main-contact-form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required />

          </div>
          <div className="main-contact-form-group">
            <label htmlFor="subject"></label>
            <input
              type="text"
              id="subject"
              className="main-contact-form-control"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required />

          </div>
          <div className="main-contact-form-group">
            <label htmlFor="message"></label>
            <textarea
              id="message"
              className="main-contact-form-control"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Leave a message here"
              style={{ height: "150px" }}
              required ></textarea>
          </div><center>
            <button className="main-contact-submit-button" type="submit">Send Message</button></center>
        </form><br /><br /><br /><br /><br /><br />

      </div>

    </>
  );
};

export default MainContact;
