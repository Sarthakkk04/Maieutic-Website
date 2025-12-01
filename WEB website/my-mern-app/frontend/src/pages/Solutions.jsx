import React, { useState } from "react";
import MamathaImage from "../img-assets/MAMATHA.jpg";
import RavishankaraImage from "../img-assets/RAVISHANKARA.jpg";
 
// Team Members
const teamMembers = [
  {
    name: "RAVISHANKARA B",
    role: "C.E.O",
    image: RavishankaraImage,
    description: `Performance-driven professional from technology & managerial background with over 20+ years of leadership experience in Strategic Planning, Business Development, Sales & Marketing, Operations Management and Customer Relationship Management. Highly focused on building sales funnel and consistently involved in bringing in new logos. Extensively worked towards the revenue and profit gains for the organization in a highly competitive market. Possess hands-on experience in both services and product selling fields such as E-Learning, Enterprise Mobile Services, Mechanical Design Engineering Services, Telecommunications and BPO sector. Exceptional communicator with a customer-centric approach, strong negotiation skills, outstanding problem-solving abilities and aggressively identifies opportunities & nurture those prospects to provide tactical business solutions.`
  },
  {
    name: "MAMATHA BHARGAV",
    role: "Operations",
    image: MamathaImage,
    description: `Operations and performance driven professional with 8+ years’ experience with diverse backgrounds in content creation, storyboarding, management, client/vendor relationship management. Effective team player, leader, communicator, out-of-the-box thinking. Hands on experience in Learning Design and instructional designing, focused on quality deliveries. Keen eye for details towards completion. Contributing management with the day-to-day activity and helping sales team in revenue generation.`
  },
  {
    name: "PROJECT MANAGER",
    role: "Project Management",
    image: "PROJECT_MANAGER.jpg",
    description: `Oversees projects, coordinates with teams, ensures timely delivery, and maintains high quality standards. Skilled in planning, execution, and stakeholder communication.`
  },
  {
    name: "SALES & MARKETING",
    role: "Sales & Marketing",
    image: "SALES_MARKETING.jpg",
    description: `Handles sales strategies, marketing campaigns, client engagement, and revenue generation. Expertise in market analysis and customer relationship management.`
  }
];
 
// Specialists Data
const specialistsData = {
  "Instructional Designers": [
    {
      name: "John Doe",
      role: "Senior Designer",
      image: "john.jpg",
      description: "Experienced instructional designer with 5+ years in e-learning content development."
    },
    {
      name: "Jane Smith",
      role: "Junior Designer",
      image: "jane.jpg",
      description: "Supports course creation and storyboard development for various clients."
    }
  ],
  "Articulate": [
    {
      name: "Alice Johnson",
      role: "Articulate Expert",
      image: "alice.jpg",
      description: "Specialist in Articulate 360 and interactive e-learning modules."
    }
  ],
  "Video Editors": [
    {
      name: "Bob Brown",
      role: "Video Editor",
      image: "bob.jpg",
      description: "Handles video editing and post-production for training modules."
    }
  ],
  "Voice-Over Artist": [
    {
      name: "Emily White",
      role: "Voice Talent",
      image: "emily.jpg",
      description: "Professional voice-over artist with experience in corporate e-learning."
    }
  ],
  "Data Engineers": [
    {
      name: "David Green",
      role: "Data Engineer",
      image: "david.jpg",
      description: "Works on data collection, cleaning, and analytics for learning systems."
    }
  ]
};
 
// Specialist Accordion Component
const SpecialistAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
 
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
 
  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto" }}>
      {Object.keys(specialistsData).map((specialist, index) => (
        <div key={index} style={{ marginBottom: "1rem" }}>
          <div
            onClick={() => toggleAccordion(index)}
            style={{
              background: "#4f5857ff",
              color: "#f9f9f9",
              padding: "1rem 1.5rem",
              cursor: "pointer",
              fontWeight: "bold",
              borderRadius: "6px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            {specialist}
            <span>{activeIndex === index ? "−" : "+"}</span>
          </div>
 
          {activeIndex === index && (
            <div style={{ background: "#f8f9fa", padding: "1rem 1.5rem", borderRadius: "6px" }}>
              {specialistsData[specialist].map((member, i) => (
                <div key={i} style={{ display: "flex", marginBottom: "1rem", gap: "1rem" }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{ width: "100px", height: "100px", borderRadius: "12px", objectFit: "cover" }}
                  />
                  <div>
                    <h3 style={{ margin: 0, color: "#00615c" }}>{member.name}</h3>
                    <h4 style={{ margin: "0.2rem 0", color: "#333" }}>{member.role}</h4>
                    <p style={{ margin: 0, color: "#444", fontSize: "0.95rem" }}>{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
 
// Management Component
function Solutions() {
  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1rem", background: "#FEF1DE"  }}>
      <h1 style={{ textAlign: "center", marginBottom: "3rem", fontSize: "2.5rem", color: "#00615c" }}>
        Our Management Team
      </h1>
 
      {/* Row 1: CEO & Operations */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        flexWrap: "wrap",
        marginBottom: "2rem"
      }}>
        {teamMembers.slice(0, 2).map(member => (
          <ManagementCard key={member.name} member={member} />
        ))}
      </div>
 
      {/* Row 2: Project Manager (Image left) */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
        <WideCard member={teamMembers[2]} imageLeft={true} />
      </div>
 
      {/* Row 3: Sales & Marketing (Image right) */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>
        <WideCard member={teamMembers[3]} imageLeft={false} />
      </div>
 
      {/* Specialists Section */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem" }}>
        <h2 style={{ textAlign: "center", color: "#00615c", fontSize: "2rem", marginBottom: "2rem" }}>
          Our Specialists
        </h2>
 
        <SpecialistAccordion />
      </div> 
    </div>
  );
}
 
// Standard Card Component (row1)
const ManagementCard = ({ member }) => {
  return (
    <div
      style={{
        flex: "1 1 45%",
        maxWidth: "600px",
        background: "#f9f9f9",
        borderRadius: "12px",
        border: "2px dashed #00615c",
        padding: "1.5rem",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "transform 0.3s, box-shadow 0.3s"
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.18)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.12)";
      }}
    >
      <img
        src={member.image}
        alt={member.name}
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "1rem",
          border: "2px solid #00615c"
        }}
      />
      <h2 style={{ color: "#00615c", marginBottom: "0.3rem" }}>{member.name}</h2>
      <h3 style={{ color: "#333", marginBottom: "1rem" }}>{member.role}</h3>
      <p style={{ color: "#444", lineHeight: "1.6", fontSize: "1rem", textAlign: "justify" }}>
        {member.description}
      </p>
    </div>
  );
};
 
// Wide Card Component (row2 & row3)
const WideCard = ({ member, imageLeft }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: imageLeft ? "row" : "row-reverse",
        alignItems: "center",
        width: "90%",
        background: "#f9f9f9",
        borderRadius: "12px",
        border: "2px dashed #00615c",
        padding: "2rem",
        gap: "2rem",
        boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
        transition: "transform 0.3s, box-shadow 0.3s",
        flexWrap: "wrap"
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.18)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.12)";
      }}
    >
      <img
        src={member.image}
        alt={member.name}
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "12px",
          objectFit: "cover",
          border: "2px solid #00615c",
          flexShrink: 0
        }}
      />
      <div style={{ flex: "1 1 300px" }}>
        <h2 style={{ color: "#00615c", marginBottom: "0.3rem" }}>{member.name}</h2>
        <h3 style={{ color: "#333", marginBottom: "1rem" }}>{member.role}</h3>
        <p style={{ color: "#444", lineHeight: "1.6", fontSize: "1rem", textAlign: "justify" }}>
          {member.description}
        </p>
      </div>
    </div>
  );
};
 
export default Solutions;