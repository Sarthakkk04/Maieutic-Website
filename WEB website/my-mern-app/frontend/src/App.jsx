// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer"; // optional

// Pages (main)
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import Industry from "./pages/Industry";
import Insights from "./pages/Insights";
import DiscoverUs from "./pages/DiscoverUs";
import Resources from "./pages/Resources";
import ContactUs from "./pages/ContactUs";

// Sub-pages under Solutions
import ELearningServices from "./pages/solutions/ELearningServices";
import AnimationServices from "./pages/solutions/AnimationServices";
import TrainingServices from "./pages/solutions/TrainingServices";
import PsychometricAssessment from "./pages/solutions/PsychometricAssessment";

// Sub-pages under Industry
import Education from "./pages/industry/Education";
import Healthcare from "./pages/industry/Healthcare";
import Manufacturing from "./pages/industry/Manufacturing";
import BFSI from "./pages/industry/BFSI";
import ITConsulting from "./pages/industry/ITConsulting";
import Retail from "./pages/industry/Retail";

// Sub-pages under Discover Us
import AboutUs from "./pages/discoverus/AboutUs";
import Leadership from "./pages/discoverus/Leadership";
import JoinUs from "./pages/discoverus/JoinUs";
import Customers from "./pages/discoverus/Customers";
import Testimonials from "./pages/discoverus/Testimonials";
import Portfolio from "./pages/discoverus/Portfolio";

// Sub-pages under Resources
import Brochure from "./pages/resources/Brochure";
import CaseStudy from "./pages/resources/CaseStudy";
import LinkedIn from "./pages/resources/LinkedIn";
import Blog from "./pages/resources/Blog";

export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/discover-us" element={<DiscoverUs />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Solutions sub-pages */}
        <Route path="/solutions/elearningservices" element={<ELearningServices />} />
        <Route path="/solutions/animationservices" element={<AnimationServices />} />
        <Route path="/solutions/trainingservices" element={<TrainingServices />} />
        <Route path="/solutions/psychometricassessment" element={<PsychometricAssessment />} />

        {/* Industry sub-pages */}
        <Route path="/industry/education" element={<Education />} />
        <Route path="/industry/healthcare" element={<Healthcare />} />
        <Route path="/industry/manufacturing" element={<Manufacturing />} />
        <Route path="/industry/bfsi" element={<BFSI />} />
        <Route path="/industry/itconsulting" element={<ITConsulting />} />
        <Route path="/industry/retail" element={<Retail />} />

        {/* Discover Us sub-pages */}
        <Route path="/discover-us/aboutus" element={<AboutUs />} />
        <Route path="/discover-us/leadership" element={<Leadership />} />
        <Route path="/discover-us/joinus" element={<JoinUs />} />
        <Route path="/discover-us/customers" element={<Customers />} />
        <Route path="/discover-us/testimonials" element={<Testimonials />} />
        <Route path="/discover-us/portfolio" element={<Portfolio />} />

        {/* Resources sub-pages */}
        <Route path="/resources/brochure" element={<Brochure />} />
        <Route path="/resources/casestudy" element={<CaseStudy />} />
        <Route path="/resources/linkedin" element={<LinkedIn />} />
        <Route path="/resources/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </Router>
  );
}
