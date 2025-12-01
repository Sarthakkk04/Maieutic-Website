import React from "react";
 
function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #004d40 0%, #00695c 100%)",
        padding: "3rem 1rem 1rem",
        width: "100%",
        color: "#fff",
        boxShadow: "0 -4px 12px rgba(0,0,0,0.15)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "2.5rem",
          textAlign: "left",
        }}
      >
{/* Logo + Social */}
          <div style={{ flex: "1 1 280px" }}>
            <img
              src="maieutic1-logo.png"
              alt="Maieutic Logo"
              style={{ width: "240px", marginBottom: "1.5rem" }}
            />
            <p style={{ fontSize: "0.95rem", lineHeight: "1.6", opacity: 0.9 }}>
              Empowering education through innovation and technology-driven solutions.
            </p>
            <div
              style={{ display: "flex", gap: "0.8rem", marginTop: "1rem" }}
            >
              <a
                href="https://www.facebook.com/Maieuticedutech/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "1.2rem",
                  color: "#004d40",
                  background: "#fff",
                  borderRadius: "50%",
                  width: "38px",
                  height: "38px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "0.3s"
                }}
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://in.linkedin.com/company/maieuticedutech"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "1.2rem",
                  color: "#004d40",
                  background: "#fff",
                  borderRadius: "50%",
                  width: "38px",
                  height: "38px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "0.3s"
                }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.instagram.com/maieutic2018/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "1.2rem",
                  color: "#004d40",
                  background: "#fff",
                  borderRadius: "50%",
                  width: "38px",
                  height: "38px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "0.3s"
                }}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
 
          {/* Explore */}
          <div style={{ flex: "1 1 200px" }}>
            <h3
              style={{
                fontWeight: "bold",
                marginBottom: "1rem",
                borderBottom: "2px solid #fff",
                display: "inline-block",
                paddingBottom: "0.3rem",
                fontSize: "1.1rem"
              }}
            >
              EXPLORE
            </h3>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
              <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Home</a></li>
              <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Management</a></li>
              <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Portfolio</a></li>
              <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Gallery</a></li>
              <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Career</a></li>
              <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Internships</a></li>
            </ul>
          </div>
 
          {/* Contact */}
          <div style={{ flex: "1 1 250px" }}>
            <h3
              style={{
                fontWeight: "bold",
                marginBottom: "1rem",
                borderBottom: "2px solid #fff",
                display: "inline-block",
                paddingBottom: "0.3rem",
                fontSize: "1.1rem"
              }}
            >
              CONTACT
            </h3>
            <p style={{ marginBottom: "0.8rem" }}>
              <b>India:</b> +91 9663727955 <br /> +91 8035893194
            </p>
            <p style={{ marginBottom: "0.8rem" }}>
              <b>USA:</b> +1 4156518421
            </p>
            <p style={{ marginBottom: "0.8rem" }}>
              <b>Email:</b>
              <br />
              <a
                href="mailto:info@maieuticedutech.com"
                style={{ color: "#fff", textDecoration: "underline" }}
              >
                info@maieuticedutech.com
              </a>
              <br />
              <a
                href="mailto:ravishankara.b@maieuticedutech.com"
                style={{ color: "#fff", textDecoration: "underline" }}
              >
                ravishankara.b@maieuticedutech.com
              </a>
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
        <div
          style={{
            textAlign: "center",
            marginTop: "2.5rem",
            fontSize: "0.9rem",
            color: "#eee",
            borderTop: "1px solid rgba(255, 255, 255, 0.3)",
            paddingTop: "1rem",
            letterSpacing: "0.5px"
          }}
        >
          © 2025 Maieutic Edutech Pvt Ltd — All Rights Reserved
        </div>
      </footer>
  );
}
 
export default Footer;