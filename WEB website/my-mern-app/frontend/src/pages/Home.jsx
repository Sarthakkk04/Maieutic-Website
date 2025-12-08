import React from "react";
import "../styles/global.css";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      
      <div
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
  <section style={{ padding: "2rem 0", textAlign: "center" }}>
    <h2
      style={{
        color: "#00615c",
        fontFamily: "'Posterama', Arial, sans-serif",
        fontWeight: "bold",
        fontSize: "2.5rem",
        marginBottom: "1.5rem",
      }}
    >
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
<section style={{ padding: "2rem 0", textAlign: "center" }}>
  <h2
    style={{
      color: "#00615c",
      fontFamily: "'Posterama', Arial, sans-serif",
      fontWeight: "bold",
      fontSize: "2rem",
      marginBottom: "1.5rem",
    }}
  >
    Our Vision & Mission
  </h2>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "2rem",
      flexWrap: "wrap",
    }}
  >
    <div
      style={{
        background: "#F2AA84",
        padding: "2rem",
        borderRadius: "16px",
        width: "350px",
        boxShadow: "0 2px 12px rgba(163,16,9,0.07)",
      }}
    >
      <h3 style={{ color: "#800d07", fontFamily: "'Posterama', Arial, sans-serif" }}>
        Vision
      </h3>
      <p style={{ color: "#00615c", fontFamily: "'Franklin Gothic Book', Arial, sans-serif" }}>
        To be the most trusted partner in the education sector, enabling institutions and individuals to achieve excellence through technology-driven learning.
      </p>
    </div>

    <div
      style={{
        background: "#F2AA84",
        padding: "2rem",
        borderRadius: "16px",
        width: "350px",
        boxShadow: "0 2px 12px rgba(163,16,9,0.07)",
      }}
    >
      <h3 style={{ color: "#800d07", fontFamily: "'Posterama', Arial, sans-serif" }}>
        Mission
      </h3>
      <p style={{ color: "#00615c", fontFamily: "'Franklin Gothic Book', Arial, sans-serif" }}>
        To deliver innovative, effective, and affordable e-learning solutions that foster growth, creativity, and lifelong learning.
      </p>
    </div>
  </div>
</section>

         {/* Services */}
      <section style={{ padding: "2rem 0", textAlign: "center" }}>
        <h2
          style={{
            color: "#00615c",
            fontFamily: "'Posterama', Arial, sans-serif",
            fontWeight: "bold",
            fontSize: "2.5rem",
            marginBottom: "1.5rem",
          }}
        >
          Our Services
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          {[
            {
              title: "Online Courses",
              desc: "Wide range of courses for students and professionals.",
            },
            {
              title: "Institutional Solutions",
              desc: "Custom e-learning platforms for schools and colleges.",
            },
            {
              title: "Teacher Training",
              desc: "Workshops and certifications for educators.",
            },
          ].map((service, i) => (
            <div
              key={i}
              style={{
                background: "#FEF1DE",
                padding: "2rem",
                borderRadius: "16px",
                width: "250px",
                boxShadow: "0 2px 12px rgba(0,97,92,0.07)",
                transition: "transform 0.2s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <h3
                style={{
                  color: "#A31009",
                  fontFamily: "'Posterama', Arial, sans-serif",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  color: "#00615c",
                  fontFamily: "'Franklin Gothic Book', Arial, sans-serif",
                }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section
        style={{
          background: "#F8847E",
          padding: "2rem 0",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#800d07",
            fontFamily: "'Posterama', Arial, sans-serif",
            fontWeight: "bold",
            fontSize: "2.5rem",
            marginBottom: "1.5rem",
          }}
        >
          What Our Clients Say
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "#800d07",
              padding: "1.5rem",
              borderRadius: "16px",
              width: "300px",
              boxShadow: "0 2px 12px rgba(0,97,92,0.07)",
            }}
          >
            <p
              style={{
                color: "#00615c",
                fontFamily: "'Franklin Gothic Book', Arial, sans-serif",
              }}
            >
              "Maieutic Edutech helped our school implement a seamless online
              learning platform. The support and training were excellent!"
            </p>
            <strong
              style={{
                color: "#800d07",
                fontFamily: "'Posterama', Arial, sans-serif",
              }}
            >
              - School Principal
            </strong>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "1.5rem",
              borderRadius: "16px",
              width: "300px",
              boxShadow: "0 2px 12px rgba(0,97,92,0.07)",
            }}
          >
            <p
              style={{
                color: "#00615c",
                fontFamily: "'Franklin Gothic Book', Arial, sans-serif",
              }}
            >
              "The courses are engaging and easy to follow. Highly recommended
              for anyone looking to upskill!"
            </p>
            <strong
              style={{
                color: "#800d07",
                fontFamily: "'Posterama', Arial, sans-serif",
              }}
            >
              - Student
            </strong>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        style={{
          padding: "3rem 2rem",
          textAlign: "center",
          background: "linear-gradient(90deg, #00615c 0%, #008680 100%)",
          color: "#fff",
        }}
      >
        <h2
          style={{
            fontWeight: "700",
            fontFamily: "'Posterama', Arial, sans-serif",
            fontSize: "2.5rem",
          }}
        >
          Ready to transform your learning experience?
        </h2>
        <button
          style={{
            padding: "1rem 2.5rem",
            fontSize: "1.2rem",
            background: "#A31009",
            color: "#fff",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            marginTop: "1rem",
            fontWeight: "bold",
            fontFamily: "'Franklin Gothic Book', Arial, sans-serif",
            boxShadow: "0 4px 16px rgba(163,16,9,0.15)",
            transition: "background 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.background = "#800d07")}
          onMouseOut={(e) => (e.target.style.background = "#A31009")}
        >
          Contact Us
        </button>
      </section>

    </div>
  );
}

export default Home;
