import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="intro">
        <h1>Hi! I’m <span className="name">Lauren Kam :)</span></h1>
        <p>Engineer First, Software Second</p>
        <div className="buttons">
          <a href="#" className="button">Resume</a>
          <a href="mailto:example@example.com" className="button">
            <img src="/images/gmail-icon.png" alt="Gmail" /> Gmail
          </a>
          <a href="https://www.linkedin.com" className="button">
            <img src="/images/linkedin-icon.png" alt="LinkedIn" /> LinkedIn
          </a>
        </div>
      </div>
      <div className="image">
        <img src="/images/profile-image.jpg" alt="Lauren Kam" />
      </div>
    </div>
  );
}

export default Home;