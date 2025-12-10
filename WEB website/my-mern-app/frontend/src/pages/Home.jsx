import React from "react";
import "../styles/global.css";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      
      <div
        className="hero-section"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "4vw",
          marginTop: "2vw",
        }}
      >
        <div className="hero-text">
          <h1 className="brand-heading">Maieutic Edutech Pvt. Ltd.</h1>
          <p className="brand-sub">Where Creativity Meets Learning</p>
        </div>

        <svg
          width="500"
          height="500"
          viewBox="0 0 200 200"
          style={{ cursor: "pointer", display: "block" }}
          className="brand-m"
        >
          <defs>
            {/* Left half gradient */}
            <linearGradient id="m-gradient-left" x1="0" y1="1" x2="0" y2="0">
              <stop className="left-stop1" offset="0%" stopColor="#726e6e73" />
              <stop className="left-stop2" offset="100%" stopColor="#242222ff" />
            </linearGradient>

            {/* Right half gradient */}
            <linearGradient id="m-gradient-right" x1="0" y1="1" x2="0" y2="0">
              <stop className="right-stop1" offset="0%" stopColor="#2b272773" />
              <stop className="right-stop2" offset="100%" stopColor="#242222ff" />
            </linearGradient>
          </defs>

          {/* Left half of M */}
          <path
            className="m-left"
            d="M20 180 L40 40 L95 110 Z"
            fill="url(#m-gradient-left)"
            stroke="none"
          />

          {/* Right half of M */}
          <path
            className="m-right"
            d="M95 110 L165 40 L190 180 L130 130 L20 180 z"
            fill="url(#m-gradient-right)"
            stroke="none"
          />
          
        </svg>
      </div>
      <button
      onClick={() => navigate("/book-a-demo")}
      style={{
        marginTop: "20px",
        backgroundColor: "#FF6A00",
        padding: "14px 32px",
        borderRadius: "6px",
        border: "none",
        color: "#fff",
        fontSize: "17px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "0.3s",
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#e65c00")}
      onMouseOut={(e) => (e.target.style.backgroundColor = "#FF6A00")}
    >
      Book a Demo
    </button>

     {/* Wave + Featured Clients Section */}
<div>
  {/* Featured Clients */}
  <section className="clients-section">
    <h2 className="clients-heading">
      Leverage our experience working with these Fortune Clients
    </h2>

    {/* Clients Marquee */}
    <div className="client-marquee">
      <div className="client-track">
        <img src={require("../img-assets/Rectangle 180.png")} alt="Client 2" />
        <img src={require("../img-assets/Rectangle 181-1.png")} alt="Client 3" />
        <img src={require("../img-assets/Rectangle 181-2.png")} alt="Client 4" />
        <img src={require("../img-assets/Rectangle 181-3.png")} alt="Client 5" />
        <img src={require("../img-assets/Rectangle 181-4.png")} alt="Client 6" />
        <img src={require("../img-assets/Rectangle 181.png")} alt="Client 7" />
        <img src={require("../img-assets/Rectangle 182-1.png")} alt="Client 8" />
        <img src={require("../img-assets/Rectangle 182-2.png")} alt="Client 9" />
        <img src={require("../img-assets/Rectangle 182-3.png")} alt="Client 10" />
        <img src={require("../img-assets/Rectangle 182-4.png")} alt="Client 11" />
        <img src={require("../img-assets/Rectangle 182-5.png")} alt="Client 12" />
        <img src={require("../img-assets/Rectangle 182-6.png")} alt="Client 13" />
        <img src={require("../img-assets/Rectangle 182-7.png")} alt="Client 14" />
        <img src={require("../img-assets/Rectangle 182-8.png")} alt="Client 15" />
        <img src={require("../img-assets/Rectangle 182.png")} alt="Client 16" />
        <img src={require("../img-assets/Rectangle 183-1.png")} alt="Client 17" />
        <img src={require("../img-assets/Rectangle 183-2.png")} alt="Client 18" />
        <img src={require("../img-assets/Rectangle 183-3.png")} alt="Client 19" />
        <img src={require("../img-assets/Rectangle 183.png")} alt="Client 20" />
        <img src={require("../img-assets/Rectangle 184-1.png")} alt="Client 21" />
        <img src={require("../img-assets/Rectangle 185-1.png")} alt="Client 22" />
        <img src={require("../img-assets/Rectangle 185-2.png")} alt="Client 23" />
        <img src={require("../img-assets/Rectangle 185-3.png")} alt="Client 24" />
        <img src={require("../img-assets/Rectangle 211.png")} alt="Client 25" />
        <img src={require("../img-assets/Rectangle 212.png")} alt="Client 26" />
        <img src={require("../img-assets/Rectangle 213.png")} alt="Client 27" />
        <img src={require("../img-assets/Rectangle 311.png")} alt="Client 28" />
        <img src={require("../img-assets/Rectangle 312.png")} alt="Client 29" />
        <img src={require("../img-assets/Rectangle 314.png")} alt="Client 30" />
        <img src={require("../img-assets/Rectangle 316.png")} alt="Client 31" />
        <img src={require("../img-assets/Rectangle 316-1.png")} alt="Client 32" />
        <img src={require("../img-assets/Rectangle 316-2.png")} alt="Client 33" />

        {/* Duplicate images for seamless loop */}
        <img src={require("../img-assets/Rectangle 180.png")} alt="Client 2 duplicate" />
        <img src={require("../img-assets/Rectangle 181-1.png")} alt="Client 3 duplicate" />
        <img src={require("../img-assets/Rectangle 181-2.png")} alt="Client 4 duplicate" />
        <img src={require("../img-assets/Rectangle 181-3.png")} alt="Client 5 duplicate" />
        <img src={require("../img-assets/Rectangle 181-4.png")} alt="Client 6 duplicate" />
        <img src={require("../img-assets/Rectangle 181.png")} alt="Client 7 duplicate" />
        <img src={require("../img-assets/Rectangle 182-1.png")} alt="Client 8 duplicate" />
        <img src={require("../img-assets/Rectangle 182-2.png")} alt="Client 9 duplicate" />
        <img src={require("../img-assets/Rectangle 182-3.png")} alt="Client 10 duplicate" />
        <img src={require("../img-assets/Rectangle 182-4.png")} alt="Client 11 duplicate" />
        <img src={require("../img-assets/Rectangle 182-5.png")} alt="Client 12 duplicate" />
        <img src={require("../img-assets/Rectangle 182-6.png")} alt="Client 13 duplicate" />
        <img src={require("../img-assets/Rectangle 182-7.png")} alt="Client 14 duplicate" />
        <img src={require("../img-assets/Rectangle 182-8.png")} alt="Client 15 duplicate" />
        <img src={require("../img-assets/Rectangle 182.png")} alt="Client 16 duplicate" />
        <img src={require("../img-assets/Rectangle 183-1.png")} alt="Client 17 duplicate" />
        <img src={require("../img-assets/Rectangle 183-2.png")} alt="Client 18 duplicate" />
        <img src={require("../img-assets/Rectangle 183-3.png")} alt="Client 19 duplicate" />
        <img src={require("../img-assets/Rectangle 183.png")} alt="Client 20 duplicate" />
        <img src={require("../img-assets/Rectangle 184-1.png")} alt="Client 21 duplicate" />
        <img src={require("../img-assets/Rectangle 185-1.png")} alt="Client 22 duplicate" />
        <img src={require("../img-assets/Rectangle 185-2.png")} alt="Client 23 duplicate" />
        <img src={require("../img-assets/Rectangle 185-3.png")} alt="Client 24 duplicate" />
        <img src={require("../img-assets/Rectangle 211.png")} alt="Client 25 duplicate" />
        <img src={require("../img-assets/Rectangle 212.png")} alt="Client 26 duplicate" />
        <img src={require("../img-assets/Rectangle 213.png")} alt="Client 27 duplicate" />
        <img src={require("../img-assets/Rectangle 311.png")} alt="Client 28 duplicate" />
        <img src={require("../img-assets/Rectangle 312.png")} alt="Client 29 duplicate" />
        <img src={require("../img-assets/Rectangle 314.png")} alt="Client 30 duplicate" />
        <img src={require("../img-assets/Rectangle 316.png")} alt="Client 31 duplicate" />
        <img src={require("../img-assets/Rectangle 316-1.png")} alt="Client 32 duplicate" />
        <img src={require("../img-assets/Rectangle 316-2.png")} alt="Client 33 duplicate" />
      </div>
    </div>
  </section>
</div>

{/* Vision & Mission */}
<section className="vision-mission-section">
  <div className="vision-mission-container">
    <h2 className="vision-mission-title">Our Vision & Mission</h2>
    <div className="vision-mission-grid">
      <div className="vision-card">
        <h3>Vision</h3>
        <p>
          DRIVE SUCCESS WITH INNOVATIVE EDUCATIONAL APPROACHES IN THE DIGITAL ERA
        </p>
      </div>
      <div className="mission-card">
        <h3>Mission</h3>
        <p>
          ENGAGE, EMPOWER AND FOSTER GROWTH THROUGH INSPIRED EDUCATIONAL CONTENT
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Services */}
      <section className="services-section">
        <div className="services-container">
          <h2 className="services-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📚</div>
              <h3>Online Courses</h3>
              <p>Wide range of courses for students and professionals to enhance their skills and knowledge.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3>Institutional Solutions</h3>
              <p>Custom e-learning platforms tailored for schools, colleges, and corporate organizations.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">👨‍🏫</div>
              <h3>Teacher Training</h3>
              <p>Comprehensive workshops and certifications designed to empower educators with modern teaching methodologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="testimonials-title">What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Maieutic Edutech transformed our institution's approach to learning. Their platform is intuitive, feature-rich, and the support team is exceptional. We've seen tremendous engagement from both students and teachers."
              </p>
              <div className="testimonial-author">Dr. Rajesh Kumar</div>
              <div className="testimonial-role">Principal, Premier School</div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "The courses offered are comprehensive and well-structured. As a working professional, I appreciate the flexibility and the practical knowledge gained. Highly recommended for anyone looking to upskill."
              </p>
              <div className="testimonial-author">Priya Sharma</div>
              <div className="testimonial-role">Marketing Professional</div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Outstanding platform with excellent training modules. The implementation process was smooth, and their training support ensured our team could maximize the benefits. A true game-changer for our organization."
              </p>
              <div className="testimonial-author">Amit Patel</div>
              <div className="testimonial-role">CEO, Tech Solutions Ltd</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2 className="cta-title">Ready to transform your learning experience?</h2>
        <button
          className="cta-button"
          onClick={() => window.location.href = "/contact"}
        >
          Contact Us Today
        </button>
      </section>

    </div>
  );
}

export default Home;
