import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">
{/* Logo + Social */}
          <div className="footer-col logo">
            <img src="maieutic1-logo.png" alt="Maieutic Logo" className="footer-logo" />
            <p className="footer-text">Empowering education through innovation and technology-driven solutions.</p>
            <div className="social-links">
              <a href="https://www.facebook.com/Maieuticedutech/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://in.linkedin.com/company/maieuticedutech" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/maieutic2018/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
 
          {/* Explore */}
          <div className="footer-col explore">
            <h3 className="footer-title">EXPLORE</h3>
            <ul className="footer-list">
              <li><a href="#">Home</a></li>
              <li><a href="#">Management</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Internships</a></li>
            </ul>
          </div>
 
          {/* Contact */}
          <div className="footer-col contact">
            <h3 className="footer-title">CONTACT</h3>
            <p style={{ marginBottom: "0.8rem" }}>
              <b>India:</b> +91 9663727955 <br /> +91 8035893194
            </p>
            <p style={{ marginBottom: "0.8rem" }}>
              <b>USA:</b> +1 4156518421
            </p>
            <p style={{ marginBottom: "0.8rem" }}>
              <b>Email:</b>
              <br />
              <a href="mailto:info@maieuticedutech.com">info@maieuticedutech.com</a>
              <br />
              <a href="mailto:ravishankara.b@maieuticedutech.com">ravishankara.b@maieuticedutech.com</a>
            </p>
            <p>
              <b>Address:</b>
              <br />
              379, AnuSid, Omkar Hills Main Road, <br />
              BHEL Layout, R.R.Nagar, <br />
              Bangalore - 560098
            </p>
          </div>
        </div>
 
        {/* Bottom Bar */}
        <div className="footer-bottom">© 2025 Maieutic Edutech Pvt Ltd — All Rights Reserved</div>
      </footer>
  );
}
 
export default Footer;