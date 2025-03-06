import React from "react";
import "./About.css"; // Import the CSS file

const About = () => {
  return (
    <div className="about-page-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-text">
        Launching a startup is exciting but challenging. Many founders struggle
        to identify gaps in their business strategy before pitching to
        investors. Our platform helps bridge that gap by providing an{" "}
        <strong>automated startup evaluation</strong> based on key success
        criteria.
      </p>

      <h2 className="about-subtitle">How It Works</h2>
      <ol className="about-list">
        <li>
          <strong>Upload</strong> your pitch deck and team resumes.
        </li>
        <li>
          <strong>AI-powered analysis</strong> evaluates your business based on
          team strength, market opportunity, innovation, financial viability,
          and more.
        </li>
        <li>
          <strong>Receive a detailed report</strong> with insights on weak
          points and a <strong>score out of 20</strong> to help improve your
          investor pitch.
        </li>
      </ol>

      <h2 className="about-subtitle">Why Use Our Platform?</h2>
      <ul className="about-list">
        <li>
          <strong>Objective feedback</strong> to refine your business model.
        </li>
        <li>
          <strong>Actionable insights</strong> to strengthen your pitch.
        </li>
        <li>
          <strong>Better investor readiness</strong> by addressing potential
          risks early.
        </li>
      </ul>

      
    </div>
  );
};

export default About;
