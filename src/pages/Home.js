import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="top-part">
        <div className="intro">
          <h1>Hi! I’m <br></br><span className="name">Lauren Kam :)</span></h1>
          <p>Engineer First, Software Second</p>
          <div className="buttons">
            <a href="/files/resume.pdf" download="LaurenKamResume.pdf" className="button">Resume</a>
            <a href="mailto:lk543@cornell.edu" className="button">
              <img src="/images/gmail-icon.png" alt="Gmail" />
            </a>
            <a href="https://www.linkedin.com/in/lauren-kam/" className="button">
              <img src="/images/linkedin-icon.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="image">
          <img src="/images/profile-image.jpg" alt="Lauren Kam" />
        </div>
      </div>
      <div className="arrow">
        <p>Scroll to Learn More!</p>
        <span>↓</span>
      </div>


      <div className="content-section" id="next-section">
        {/* About Me Section */}
        <h2>Introduction</h2>
        <p>
          Hi, I'm Lauren! I'm a current senior at Cornell University studying Computer Science and minoring in Business.
          I'll be beginning my career at Microsoft, within the Azure Databricks team in Azure Core. I'll be bringing my unique perspective from working in various different industries, as well as a positive attitude and willingness to constantly learn and develop. This is emphasized by my continuation of my Cornell education, pursuing an M.Eng in Systems Engineering. I love working on challenging problems and interfacing directly with customers!
          <br/>
          My professional journey has included multiple large companies/agencies including Cisco and NASA,
          as well as some fascinating AI projects such as Wordle Variation Bot.
          Outside of work, I am an orchestral violist and lead of a ~70 student engineer team!
          Connect and collaborate with me!
        </p>

        {/* Skills Section */}
        <div className="skills-section">
          {/* Programming Languages */}
          <div className="skills-card">
            <h4>Programming Languages</h4>
            <div className="skills-icons">
              <img src="/images/java-icon.png" alt="Java" />
              <img src="/images/python-icon.png" alt="Python" />
              <img src="/images/cpp-icon.png" alt="C++" />
            </div>
          </div>

          {/* Developer Tools */}
          <div className="skills-card">
            <h4>Developer Tools</h4>
            <div className="skills-icons">
              <img src="/images/github-icon.png" alt="GitHub" />
              <img src="/images/linux-icon.png" alt="Linux" />
              <img src="/images/eclipse-icon.png" alt="Eclipse" />
            </div>
          </div>

          {/* Soft Skills */}
          <div className="skills-card">
            <h4>Soft Skills</h4>
            <ul>
              <li>Collaboration</li>
              <li>Leadership</li>
              <li>Public Speaking</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;