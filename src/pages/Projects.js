import React, { useState } from "react";
import Sidebar from "./Sidebar2";
import Content from "./Content";
import "./Projects.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState("Wordle Bot");

  // Projects Data
  const projects = {
    "Wordle Bot": {
      title: "Wordle Variation Bot: Quantum Wordle",
      description: "DESCRIPTION OF THE PROJECT",
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Add YouTube URL if applicable
      images: ["/images/wordle-board.png", "/images/wordle-graph.png"],
    },
    "Terminal Chess": {
      title: "Terminal Chess",
      description: "A chess engine implemented in terminal.",
      youtubeUrl: null, // No YouTube video for this project
      images: ["/images/chess1.png", "/images/chess2.png"],
    },
  };

  return (
    <div className="projects-container">
      <Sidebar
        items={Object.keys(projects)}
        selectedItem={selectedProject}
        onSelect={setSelectedProject}
      />
      <Content jobDetails={projects[selectedProject]} />
    </div>
  );
};

export default Projects;