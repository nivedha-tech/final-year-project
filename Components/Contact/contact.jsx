import React from 'react';
import './contact.css'; 

const contact = () => {
  return (
    <div className='contact-job'>
    <h1>Contact Us</h1><br/>
    <div className="contact">
    
      <div className="footer-content">
        {/* Company Section */}
        <div className="footer-column">
          <h1>Company</h1>
          <a href=""><i className="fa fa-angle-right"></i> About Us</a>
          <a href=""><i className="fa fa-angle-right"></i> Contact Us</a>
          <a href=""><i className="fa fa-angle-right"></i> Our Services</a>
          <a href=""><i className="fa fa-angle-right"></i> Privacy Policy</a>
          <a href=""><i className="fa fa-angle-right"></i> Terms & Condition</a>
        </div>

        {/* Quick Links Section */}
        <div className="footer-column">
          <h1>Quick Links</h1>
          <a href=""><i className="fa fa-angle-right"></i> Browse Jobs</a>
          <a href=""><i className="fa fa-angle-right"></i>Help Center</a>
          <a href=""><i className="fa fa-angle-right"></i>Resume Builder</a>
          <a href=""><i className="fa fa-angle-right"></i> Help Center </a>
          <a href=""><i className="fa fa-angle-right"></i>FAQs</a>
        </div>

        {/* Contact Section */}
        <div className="footer-column">
          <h1>Contact</h1>
          <p><i className="fa fa-map-marker-alt"></i>123 Opportunity Lane,New York,United States</p>
          <p><i className="fa fa-phone-alt"></i> +012 345 67890</p>
          <p><i className="fa fa-envelope"></i> jobfinderinfo@example.com</p>
          <div className="social-icons">
            <a href=""><i className="fab fa-twitter"></i></a>
            <a href=""><i className="fab fa-facebook-f"></i></a>
            <a href=""><i className="fab fa-youtube"></i></a>
            <a href=""><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="footer-column">
         
          <h1>Newsletter</h1>
          <p>Opportunity awaits, connecting talents with dreams in a seamless flow. Discover, apply, and grow your journey to success starts here.</p>
          <div className="newsletter-signup">
        
          <input type="email" placeholder="Your email" required />
          <textarea placeholder="Give your feedback" required></textarea>
        
        <button>Submit</button>
        </div>
        </div>
      </div>

      <div className="contact-bottom">
        <div>
        <a href="#">JOB FINDER.</a>All rights reserved. Designed to help you find your dream job.<a href="#">Apply now for job opportunities that match your skills!</a>
        </div>
       
      </div>
    </div><br/><br/></div>
  );
};

export default contact;
