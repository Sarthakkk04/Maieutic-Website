import React, { useState, useEffect } from "react";
import contactImage from "../img-assets/contactpage.png";
 
function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [animate, setAnimate] = useState(true);
  // Add responsive breakpoint state
  const [viewportWidth, setViewportWidth] = useState(() => (typeof window !== "undefined" ? window.innerWidth : 1200));
  const isTablet = viewportWidth <= 1024;
  const isMobile = viewportWidth <= 768;
 
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 100); // Restart animation
    }, 6000);
    return () => clearInterval(interval);
  }, []);
 
  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
 
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (response.ok) {
        alert("Thank you for contacting us!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    }
  };
 
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FEF1DE",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: isMobile ? "1.5rem 1rem 0 1rem" : "3rem 1rem 0 1rem", // 🔹 removed bottom padding to close gap
        overflowX: "hidden"
      }}
    >
      {/* --- Your Contact Page Content (unchanged) --- */}
      <div
        style={{
          display: "flex",
          flexDirection: isTablet ? "column" : "row",
          maxWidth: "1400px",
          width: "100%",
          gap: isMobile ? "0" : "3rem",
          marginBottom: isMobile ? "1.25rem" : "3rem",
          alignItems: isTablet ? "stretch" : "flex-start"
        }}
      >
        {/* Left: Welcome Text */}
        <div
          style={{
            flex: isTablet ? "0 1 auto" : "1 1 500px",
            color: "#222e3a",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: isMobile ? "1rem 1rem" : "2.5rem 2rem",
            minWidth: isTablet ? "auto" : "400px",
            background: "none"
          }}
        >
          <h1
            className={animate ? "fade-in" : ""}
            style={{
              fontFamily: "'Posterama', Arial, sans-serif",
              fontWeight: "bold",
              fontSize: isMobile ? "2rem" : "2.5rem",
              marginBottom: isMobile ? "0.5rem" : "1rem",
              color: "#222e3a"
            }}
          >
            Hey there!
          </h1>
          <h2
            className={animate ? "fade-in" : ""}
            style={{
              fontFamily: "'Posterama', Arial, sans-serif",
              fontWeight: "bold",
              fontSize: isMobile ? "1.4rem" : "2rem",
              marginBottom: isMobile ? "0.75rem" : "2rem",
              color: "#222e3a",
              animationDelay: "0.3s"
            }}
          >
            Thank you for stopping by!
          </h2>
          <p
            className={animate ? "fade-in" : ""}
            style={{
              fontFamily: "'Franklin Gothic Book', Arial, sans-serif",
              fontSize: isMobile ? "1rem" : "1.25rem",
              marginBottom: isMobile ? "0.75rem" : "2rem",
              lineHeight: "1.5",
              color: "#222e3a",
              animationDelay: "0.6s"
            }}
          >
            We’re here to make your learning journey seamless and effective.
          </p>
          <p
            className={animate ? "fade-in" : ""}
            style={{
              fontFamily: "'Franklin Gothic Book', Arial, sans-serif",
              fontSize: isMobile ? "1rem" : "1.25rem",
              lineHeight: "1.5",
              color: "#222e3a",
              animationDelay: "0.9s"
            }}
          >
            We’d love to hear from you if you need more information, have
            questions, or are ready to start a learning journey together.
          </p>
        </div>
 
        {/* Right: Contact Info & Form side by side */}
        <div
          style={{
            flex: "1 1 700px",
            display: "flex",
            flexDirection: isTablet ? "column" : "row",
            gap: "0",
            minWidth: isTablet ? "auto" : "600px",
            maxWidth: "100%",
            width: "100%",
            justifyContent: isTablet ? "flex-start" : "flex-end",
            alignItems: isTablet ? "stretch" : "stretch",
            borderRadius: isTablet ? "24px" : "0px",
            overflow: isTablet ? "hidden" : "visible"
          }}
        >
          {/* Contact Info */}
          <div
            style={{
              background: "#00615c",
              color: "#fff",
              borderTopLeftRadius: isTablet ? "24px" : "32px",
              borderBottomLeftRadius: isTablet ? "0px" : "32px",
              borderTopRightRadius: isTablet ? "24px" : "0px",
              borderBottomRightRadius: isTablet ? "0px" : "0px",
              boxShadow: isTablet ? "none" : "0 4px 32px rgba(0,97,92,0.10)",
              padding: isMobile ? "1.25rem 1rem" : "2.5rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              textAlign: "left",
              minWidth: isTablet ? "auto" : "350px",
              maxWidth: isTablet ? "100%" : "350px",
              width: isTablet ? "100%" : "auto",
              overflow: "hidden",
              marginBottom: isTablet ? "0" : "0"
            }}
          >
            <h2
              style={{
                fontFamily: "'Posterama', Arial, sans-serif",
                fontWeight: "bold",
                fontSize: isMobile ? "1.25rem" : "1.5rem",
                marginBottom: isMobile ? "0.75rem" : "1.2rem"
              }}
            >
              Contact Information
            </h2>
            <div style={{ marginBottom: isMobile ? "0.75rem" : "1.2rem" }}>
              <div style={{ marginBottom: isMobile ? "0.5rem" : "1rem" }}>
                <span style={{ fontWeight: "bold" }}>Address:</span>
                <br />
                379, AnuSid, Omkar Hills Main Road, BHEL Layout, R.R.Nagar,
                Bangalore - 560098
                <br />
              </div>
              <div style={{ marginBottom: isMobile ? "0.5rem" : "1rem" }}>
                <span style={{ fontWeight: "bold" }}>Phone:</span>
                <br />
                <a
                  href="tel:+919663727955"
                  style={{ color: "#fff", textDecoration: "underline" }}
                >
                  +91 9663727955
                </a>
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Email:</span>
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
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem", marginTop: isMobile ? "0.5rem" : "1rem", marginBottom: isTablet ? "0" : "0" }}>
              <a
                href="https://www.facebook.com/Maieuticedutech/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff", fontSize: "1.1rem" }}
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://in.linkedin.com/company/maieuticedutech"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff", fontSize: "1.1rem" }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.instagram.com/maieutic2018/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff", fontSize: "1.1rem" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
 
          {/* Contact Form */}
          <div
            style={{
              background: "#ffffffff",
              borderTopRightRadius: isTablet ? "0px" : "32px",
              borderBottomRightRadius: isTablet ? "24px" : "32px",
              borderTopLeftRadius: isTablet ? "0px" : "0px",
              borderBottomLeftRadius: isTablet ? "24px" : "0px",
              boxShadow: isTablet ? "none" : "0 4px 32px rgba(0,97,92,0.10)",
              padding: isMobile ? "1.25rem 1rem" : "2.5rem 2rem",
              paddingBottom: isMobile ? "0" : "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minWidth: isTablet ? "auto" : "340px",
              maxWidth: isTablet ? "100%" : "400px",
              width: isTablet ? "100%" : "auto",
              overflow: "hidden"
            }}
          >
            <h2
              style={{
                fontFamily: "'Posterama', Arial, sans-serif",
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "#00615c",
                marginBottom: "1.2rem"
              }}
            >
              Get In Touch
            </h2>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem"
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                style={{
                  padding: "0.75rem",
                  borderRadius: "8px",
                  border: "1px solid #F2AA84",
                  fontSize: "1rem",
                  width: isMobile ? "calc(100% - 2px)" : "100%",
                  maxWidth: "100%",
                  boxSizing: "border-box",
                  display: "block"
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                style={{
                  padding: "0.75rem",
                  borderRadius: "8px",
                  border: "1px solid #F2AA84",
                  fontSize: "1rem",
                  width: isMobile ? "calc(100% - 2px)" : "100%",
                  maxWidth: "100%",
                  boxSizing: "border-box",
                  display: "block"
                }}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={form.phone}
                onChange={handleChange}
                required
                style={{
                  padding: "0.75rem",
                  borderRadius: "8px",
                  border: "1px solid #F2AA84",
                  fontSize: "1rem",
                  width: isMobile ? "calc(100% - 2px)" : "100%",
                  maxWidth: "100%",
                  boxSizing: "border-box",
                  display: "block"
                }}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                style={{
                  padding: "0.75rem",
                  borderRadius: "8px",
                  border: "1px solid #F2AA84",
                  fontSize: "1rem",
                  resize: "vertical",
                  width: isMobile ? "calc(100% - 2px)" : "100%",
                  maxWidth: "100%",
                  boxSizing: "border-box",
                  display: "block"
                }}
              />
              <button
                type="submit"
                style={{
                  background: "linear-gradient(90deg, #00615c 0%, #008680 100%)",
                  color: "#fff",
                  fontWeight: "bold",
                  fontFamily: "'Franklin Gothic Book', Arial, sans-serif",
                  padding: "0.9rem",
                  borderRadius: isTablet ? "0 0 24px 24px" : "30px",
                  border: "none",
                  fontSize: "1.05rem",
                  cursor: "pointer",
                  boxShadow: isMobile ? "none" : "0 4px 16px rgba(0,97,92,0.10)",
                  transition: "background 0.3s",
                  width: "100%",
                  alignSelf: "stretch",
                  boxSizing: "border-box",
                  marginTop: "0",
                  textAlign: "center",
                  // Stretch over horizontal padding on mobile to touch card edges
                  marginLeft: isMobile ? "-1rem" : 0,
                  marginRight: isMobile ? "-1rem" : 0
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
 
     {/* Additional Contact Section */}
<div
  style={{
    width: "100%",
    maxWidth: "1400px",
    margin: isMobile ? "1rem auto 3rem auto" : "2rem auto 3rem auto",
    display: "flex",
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 4px 32px rgba(0,97,92,0.10)",
    flexDirection: isMobile ? "column" : "row",
  }}
>
{/* Left: Image */}
<div
  style={{
    flex: "1 1 50%",
    minHeight: isMobile ? "200px" : "260px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#fefefe",
  }}
>
  <img
    src={contactImage}
    alt="Contact"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
</div>


  {/* Right: Mail Info */}
  <div
    style={{
      flex: "1 1 50%",
      background: "#00615c",
      color: "#fff",
      padding: isMobile ? "1.25rem 1rem" : "2.5rem 2rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <h2
      style={{
        fontFamily: "'Posterama', Arial, sans-serif",
        fontWeight: "bold",
        fontSize: isMobile ? "1.4rem" : "2rem",
        marginBottom: "1.25rem",
      }}
    >
      You can also reach out to us via mail.
    </h2>
    <div style={{ marginBottom: "1rem" }}>
      <div style={{ marginBottom: "0.6rem" }}>
        <span style={{ fontWeight: "bold", fontSize: "1.05rem" }}>
          Sales Inquiries:
        </span>
        <br />
        <span style={{ fontSize: "1.05rem" }}>
          sales@maieuticedutech.com
        </span>
      </div>
      <div>
        <span style={{ fontWeight: "bold", fontSize: "1.05rem" }}>
          HR Support:
        </span>
        <br />
        <span style={{ fontSize: "1.05rem" }}>
          hr@maieuticedutech.com
        </span>
      </div>
    </div>
  </div>
</div>

 
      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
 
      <style>{`
        body, #root {
          background: linear-gradient(120deg, #FEF1DE 0%, #15D9A1 100%);
          animation: gradientMove 8s ease-in-out infinite alternate;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s forwards;
        }
        .fade-in:nth-of-type(2) { animation-delay: 0.3s; }
        .fade-in:nth-of-type(3) { animation-delay: 0.6s; }
        .fade-in:nth-of-type(4) { animation-delay: 0.9s; }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
 
export default ContactUs;