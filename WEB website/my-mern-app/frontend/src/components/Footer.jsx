import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-content">
        {/* Left: Logo & Tagline */}
        <div className="footer-left">
          <img src="maieutic1-logo.png" alt="Maieutic Logo" className="footer-logo" />
          <p className="footer-tagline">Empowering education through innovation and technology.</p>
          {/* Social Links */}
          <div className="footer-social-left">
            <a href="https://www.linkedin.com/company/maieuticedutech" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.facebook.com/Maieuticedutech/" target="_blank" rel="noopener noreferrer" title="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/maieutic2018/" target="_blank" rel="noopener noreferrer" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Center: Link Columns */}
        <div className="footer-columns">
          {/* Solutions */}
          <div className="footer-col">
            <h4 className="footer-col-title">Solutions</h4>
            <ul className="footer-col-list">
              <li><a href="/solutions/ELearningServices">ELearning Services</a></li>
              <li><a href="/solutions/AnimationServices">Animation Services</a></li>
              <li><a href="/solutions/TrainingSolutions">Training Services</a></li>
              <li><a href="/solutions/PsychometricAssessment">Psychometric Assessment</a></li>
            </ul>
          </div>

          {/* Industry */}
          <div className="footer-col">
            <h4 className="footer-col-title">Industry</h4>
            <ul className="footer-col-list">
              <li><a href="/industry/Education">Education</a></li>
              <li><a href="/industry/Healthcare">Healthcare</a></li>
              <li><a href="/industry/Manufacturing">Manufacturing</a></li>
              <li><a href="/industry/BFSI">BFSI</a></li>
              <li><a href="/industry/ITConsulting">IT Consulting</a></li>
              <li><a href="/industry/Retail">Retail</a></li>
            </ul>
          </div>

          {/* Discover Us */}
          <div className="footer-col">
            <h4 className="footer-col-title">Discover Us</h4>
            <ul className="footer-col-list">
              <li><a href="/discover-us/AboutUs">About Us</a></li>
              <li><a href="/discover-us/Leadership">Leadership</a></li>
              <li><a href="/discover-us/JoinUs">Join Us</a></li>
              <li><a href="/discover-us/Customers">Customers</a></li>
              <li><a href="/discover-us/Testimonials">Testimonials</a></li>
              <li><a href="/discover-us/Portfolio">Portfolio</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-col">
            <h4 className="footer-col-title">Resources</h4>
            <ul className="footer-col-list">
              <li><a href="/resources/Brochure">Brochure</a></li>
              <li><a href="/resources/CaseStudy">Case Study</a></li>
              <li><a href="/resources/LinkedIn">LinkedIn</a></li>
              <li><a href="/resources/Blog">Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Right: Address & Contact */}
        <div className="footer-right">
          <h4 className="footer-col-title">Address</h4>
          <p className="footer-address">
            3rd Floor, School Building<br />
            Kenchena Halli Road, Near YGR Mall<br />
            Rajarajeshwari Nagar, Bengaluru - 560098
          </p>
          <div className="footer-contact-info">
            <div className="contact-item">
              <span className="contact-icon">✉</span>
              <a href="mailto:info@maieuticedutech.com">info@maieuticedutech.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <a href="tel:+919663727955">+91 96637 27955</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">© 2025 Maieutic Edutech Pvt Ltd — All Rights Reserved</div>
    </footer>
  );
}
 
export default Footer;