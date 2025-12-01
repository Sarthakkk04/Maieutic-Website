// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaChartBar,
  FaLightbulb,
  FaShieldAlt,
  FaGlobe,
  FaBuilding,
  FaUsers,
  FaBook,
} from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 900) {
        setIsOpen(false);
        setMobileDropdownOpen(null);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileDropdownOpen(null);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-inner">
          {/* Brand Logo */}
          <div className="brand">
            <img src="maieutic-logo.png" alt="Logo" className="brand-logo" />
          </div>

          {/* Desktop Links */}
          <div className="nav-links-desktop nav-links-wrapper">
            <Link to="/" className="nav-link">Home</Link>

            {/* Solutions */}
            <Dropdown
              title="Solutions"
              dropdownOpen={dropdownOpen}
              setDropdownOpen={setDropdownOpen}
              id="solutions"
              leftTitle="Solutions"
              leftDesc="Crafting tailored, tech-driven learning solutions for diverse needs."
              items={[
                {
                  icon: <FaChartBar />,
                  path: "/solutions/ELearningServices",
                  label: "ELearning Services",
                  desc: "Delivering impactful, learner-centric content that transforms knowledge into performance."
                },
                {
                  icon: <FaLightbulb />,
                  path: "/solutions/AnimationServices",
                  label: "Animation Services",
                  desc: "Bring concepts to life with creative visuals and motion storytelling."
                },
                {
                  icon: <FaGlobe />,
                  path: "/solutions/TrainingSolutions",
                  label: "Training Services",
                  desc: "Enabling student and workforce development with scalable and practical training strategies."
                },
                {
                  icon: <FaShieldAlt />,
                  path: "/solutions/PsychometricAssessment",
                  label: "Psychometric Assessment",
                  desc: "Uncover strengths, preferences, and growth areas with science-backed assessments."
                }
              ]}
            />

            {/* Industry */}
            <Dropdown
              title="Industry"
              dropdownOpen={dropdownOpen}
              setDropdownOpen={setDropdownOpen}
              id="industry"
              leftTitle="Industry"
              leftDesc="Driving transformation across diverse sectors with tailored digital learning and training solutions."
              items={[
                { icon: <FaUsers />, path: "/industry/Education", label: "Education", desc: "Serving universities, eLearning platforms, and higher education institutes." },
                { icon: <FaShieldAlt />, path: "/industry/Healthcare", label: "Healthcare", desc: "Medical writing and LMS content development for healthcare segments." },
                { icon: <FaBuilding />, path: "/industry/Manufacturing", label: "Manufacturing", desc: "Workforce upskilling with process training, safety simulations, and productivity-focused learning." },
                { icon: <FaChartBar />, path: "/industry/BFSI", label: "BFSI", desc: "Interactive modules for regulatory compliance, product knowledge, and customer service excellence." },
                { icon: <FaGlobe />, path: "/industry/ITConsulting", label: "ITConsulting", desc: "Agile learning frameworks to strengthen technical expertise and client-facing skills." },
                { icon: <FaLightbulb />, path: "/industry/Retail", label: "Retail", desc: "Learning that empowers staff with product knowledge, sales techniques, and customer experience strategies." }
              ]}
            />

            {/* Discover Us */}
            <Dropdown
              title="Discover Us"
              dropdownOpen={dropdownOpen}
              setDropdownOpen={setDropdownOpen}
              id="discover"
              leftTitle="Discover Us"
              leftDesc="Get to know who we are, what we stand for, and how we create impact."
              items={[
                { icon: <FaBook />, path: "/discover-us/AboutUs", label: "About Us", desc: "Learn about our journey, vision, and commitment to redefining learning solutions." },
                { icon: <FaUsers />, path: "/discover-us/Leadership", label: "Leadership", desc: "Meet the minds driving innovation and growth at Maieutic EduTech." },
                { icon: <FaLightbulb />, path: "/discover-us/JoinUs", label: "Join Us", desc: "Explore career opportunities and be part of a team shaping the future of learning." },
                { icon: <FaChartBar />, path: "/discover-us/Customers", label: "Customers", desc: "Trusted by leading organizations across industries to deliver excellence." },
                { icon: <FaShieldAlt />, path: "/discover-us/Testimonials", label: "Testimonials", desc: "Hear from our clients on how our solutions made a difference." },
                { icon: <FaGlobe />, path: "/discover-us/Portfolio", label: "Portfolio", desc: "A showcase of our work highlighting creativity, innovation, and measurable results." }
              ]}
            />

            {/* Resources */}
            <Dropdown
              title="Resources"
              dropdownOpen={dropdownOpen}
              setDropdownOpen={setDropdownOpen}
              id="resources"
              leftTitle="Resources"
              leftDesc="Explore insights, stories, and materials to learn more about our expertise."
              items={[
                { icon: <FaBook />, path: "/resources/Brochure", label: "Brochure", desc: "Quick overview of our services, solutions, and capabilities." },
                { icon: <FaChartBar />, path: "/resources/CaseStudy", label: "Case Study", desc: "Real-world examples of how we’ve solved client challenges." },
                { icon: <FaGlobe />, path: "/resources/LinkedIn", label: "LinkedIn", desc: "Stay connected with our latest updates, news, and thought leadership." },
                { icon: <FaLightbulb />, path: "/resources/Blog", label: "Blog", desc: "Articles and perspectives on learning, technology, and industry trends." }
              ]}
            />

            <Link to="/contact-us" className="nav-link">Contact Us</Link>
          </div>

          {/* Hamburger for Mobile */}
          <button
            className={`hamburger-btn ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div ref={drawerRef} className={`mobile-drawer ${isOpen ? "open" : ""}`}>
        <div className="mobile-nav">
          <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>Home</Link>

          <MobileDropdown title="Solutions" id="solutions" links={[
            { path: "/solutions/ELearningServices", label: "ELearning Services" },
            { path: "/solutions/AnimationServices", label: "Animation Services" },
            { path: "/solutions/TrainingSolutions", label: "Training Services" },
            { path: "/solutions/PsychometricAssessment", label: "Psychometric Assessment" }
          ]} mobileDropdownOpen={mobileDropdownOpen} setMobileDropdownOpen={setMobileDropdownOpen} closeMobileMenu={closeMobileMenu} />

          <MobileDropdown title="Industry" id="industry" links={[
            { path: "/industry/Education", label: "Education" },
            { path: "/industry/Healthcare", label: "Healthcare" },
            { path: "/industry/Manufacturing", label: "Manufacturing" },
            { path: "/industry/BFSI", label: "BFSI" },
            { path: "/industry/ITConsulting", label: "ITConsulting" },
            { path: "/industry/Retail", label: "Retail" }
          ]} mobileDropdownOpen={mobileDropdownOpen} setMobileDropdownOpen={setMobileDropdownOpen} closeMobileMenu={closeMobileMenu} />

          <MobileDropdown title="Discover Us" id="discover" links={[
            { path: "/discover-us/AboutUs", label: "About Us" },
            { path: "/discover-us/Leadership", label: "Leadership" },
            { path: "/discover-us/JoinUs", label: "Join Us" },
            { path: "/discover-us/Customers", label: "Customers" },
            { path: "/discover-us/Testimonials", label: "Testimonials" },
            { path: "/discover-us/Portfolio", label: "Portfolio" }
          ]} mobileDropdownOpen={mobileDropdownOpen} setMobileDropdownOpen={setMobileDropdownOpen} closeMobileMenu={closeMobileMenu} />

          <MobileDropdown title="Resources" id="resources" links={[
            { path: "/resources/Brochure", label: "Brochure" },
            { path: "/resources/CaseStudy", label: "Case Study" },
            { path: "/resources/LinkedIn", label: "LinkedIn" },
            { path: "/resources/Blog", label: "Blog" }
          ]} mobileDropdownOpen={mobileDropdownOpen} setMobileDropdownOpen={setMobileDropdownOpen} closeMobileMenu={closeMobileMenu} />

          <Link to="/contact-us" className="mobile-nav-link" onClick={closeMobileMenu}>Contact Us</Link>
        </div>
      </div>
    </>
  );
}

// Desktop Dropdown Component
function Dropdown({ title, dropdownOpen, setDropdownOpen, id, leftTitle, leftDesc, items }) {
  return (
    <div
      className="dropdown-wrapper"
      onMouseEnter={() => setDropdownOpen(id)}
      onMouseLeave={() => setDropdownOpen(null)}
    >
      <span className="nav-link">{title}</span>
      {dropdownOpen === id && (
        <div className="mega-dropdown">
          <div className="mega-dropdown-inner">
            <div className="mega-left">
              <h3>{leftTitle}</h3>
              <p>{leftDesc}</p>
            </div>
            <div className="mega-right">
              <div className="mega-grid">
                {items.map((item, i) => (
                  <div key={i} className="mega-item">
                    <div className="icon-box">{item.icon}</div>
                    <div>
                      <h4><Link to={item.path}>{item.label}</Link></h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Mobile dropdown component
function MobileDropdown({ title, id, links, mobileDropdownOpen, setMobileDropdownOpen, closeMobileMenu }) {
  return (
    <div className="mobile-dropdown">
      <div
        className="mobile-nav-link"
        onClick={() => setMobileDropdownOpen(mobileDropdownOpen === id ? null : id)}
        style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <span>{title}</span>
        <span>{mobileDropdownOpen === id ? "▲" : "▼"}</span>
      </div>
      {mobileDropdownOpen === id && (
        <div className="mobile-submenu">
          {links.map((link, i) => (
            <Link key={i} to={link.path} className="mobile-sub-link" onClick={closeMobileMenu}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
