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
      description: "Our project goal was to use Artificial Intelligence and Machine Learning to create an application that would be able to play the game of Wordle. Wordle is a game by the New York Times in which a player has 6 chances to guess a 5-letter word. \nOne variant of Wordle that we attempted was Quantum Wordle. Quantum Wordle is similar to Multi-Wordle with 2 simultaneous games in that two games are played simultaneously, but there are no overlapping letters in the answers. At each turn, the user may not know which game their feedback belongs to. This variation introduces Half Colors, where it’s not clear which answer the colored letter refers to. A picture of the output is shown to the left. So, in the second turn, we know that all of the letters appeared in one of the words, but we do not know which letters appeared in which word.",
      youtubeUrl: "null", // Add YouTube URL if applicable
      images: ["/images/wordle.png"],
    },
    "Terminal Chess": {
      title: "Terminal Chess",
      description: "Collaborated with a team of 3 peers to design a fully functional terminal chess game using OCaml. Through this project, I coded various functions including basic movement, en passant, castling, and flipping the board based on turns. Throughout my work, I practiced rigorous unit testing, abstract data types, and functional programming",
      youtubeUrl: "/videos/chess.mov", // No YouTube video for this project
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