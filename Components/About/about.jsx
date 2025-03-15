import React from "react";
import "./About.css";
import Footer from "../Footer/footer"

const About = () => {
  return (
    <div>
      <br />
      <h1 className="heading-about">About Us</h1>
      <br />
      <p className="about-content-main"><br />
        "At JobPortal, we prioritize transparency, innovation, and inclusivity. We aim to make job searching and hiring processes efficient and enjoyable for everyone."
      </p>
      <div className="container">
        <section className="our-mission">
          <div className="image1">
          </div>
          <div className="content">
            <h2 className="about-heading">
              Our Mission
            </h2>
            <p className="about-content">
              We believe in more than just connecting people with jobs; we focus on creating meaningful connections. By aligning the goals of job seekers with the needs of employers, we ensure mutual success. Our platform is built to foster growth, where both candidates and businesses thrive together. A true win-win! At JobPortal, we understand that finding the right fit is essential. That’s why we are committed to offering a streamlined, user-friendly experience for both job seekers and employers. With smart matching algorithms and a wide range of job listings, we make sure every opportunity is a step toward a brighter future."
              Our mission goes beyond just filling positions; it's about building lasting relationships and creating an ecosystem where talent and opportunity meet. By continuously evolving and adapting to market needs, we empower both individuals and organizations to reach their full potentia
            </p>
          </div>
        </section>
        <br />
        <br />
        <section className="our-story">
          <div className="content">
            <h2 className="about-heading">Our Story</h2>
            <p className="about-content">
              In 2010, Alex and Jamie saw the challenges job seekers and employers faced in connecting efficiently. They realized that both sides needed a better, smarter solution to find the right match. In 2012, they founded JobPortal with a mission to streamline job searches and hiring processes through data-driven insights and intuitive technology.
              , JobPortal is helping millions of job seekers and employers create meaningful connections. With innovative features and a commitment to growth, we’re changing the way talent and opportunity meet, one match at a time.
              Today, JobPortal continues to thrive with a user base of millions, helping job seekers land their dream roles and employers discover top talent. With innovative features, AI-powered recommendations, and a commitment to creating a better job market, JobPortal is changing the way the world connects, one job at a time.
            </p>
          </div>
          <div className="image2">

          </div>
        </section>
        <br />
        <br />
        <section className="our-vision">
          <div className="image3">

          </div>
          <div className="content">
            <h2 className="about-heading">Our Vision</h2>
            <p className="about-content">
              At JobPortal, we envision a world where talent and opportunity seamlessly connect, empowering individuals and organizations to thrive. Our goal is to become the leading platform for job seekers and employers, offering a space where people don’t just find jobs, but discover meaningful careers and lasting professional relationships.
              We believe in fostering growth not just for the individual, but for the organizations they help build. Through innovative technology, personalized recommendations, and a commitment to diversity and inclusion, we aim to bridge gaps in the job market and create a space where everyone has equal opportunities to succeed.
              As we evolve, our vision is to continue revolutionizing the hiring process by providing tools that simplify recruitment, enhance candidate experiences, and help businesses build stronger, more diverse teams. Together, we can create a future where job seekers and employers achieve their full potential, one connection at a time.
            </p>
          </div>
        </section>

        <br />
        <hr />
        <section className="numbers"><br /><br />
          <h2 className="about-heading">JobFinder By the Numbers</h2><br /><br />
          <div className="stats">
            <div className="stat">
              <h3 className="about-links">12 Global Offices</h3>
              <p className="about-p-links">Learn more</p>
            </div>
            <div className="stat">
              <h3 className="about-links">7,600+ Employees</h3>
              <p className="about-p-links">Learn more</p>
            </div>
            <div className="stat">
              <h3 className="about-links">205,000+ Customers</h3>
              <p className="about-p-links">Learn more</p>
            </div>
            <div className="stat">
              <h3 className="about-links">Amazing Benefits</h3>
              <p className="about-p-links">Learn more</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
