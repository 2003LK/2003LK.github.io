import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import "./Professional.css";

const Professional = () => {
  // State for the currently selected job/internship
  const [selectedJob, setSelectedJob] = useState("Microsoft: Full Time");

  // Data for jobs and internships
  const jobs = {
    "Microsoft: Full Time Software Engineer": {
      title: "Microsoft: Software Engineer on Azure Databricks",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      images: ["/images/databricks.png"],
      youtubeUrl: "https://www.youtube.com/embed/5MC-RVfqnuY"
    },
    "Microsoft: Software Engineering Intern": {
      title: "Microsoft Internship: Software Engineering Intern",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      images: ["/images/microsoft.jpg", "/images/databricks2.png"],
    },
    NASA: {
      title: "NASA: Software Engineering Intern",
      description:
        "At NASA, I worked on projects involving advanced machine learning algorithms for data analysis in space missions.",
      images: ["/images/artemis.jpg"],
      youtubeUrl: "https://www.youtube.com/embed/4n4mW2lzaJE"

    },
    "Cisco x2: ML": {
      title: "Cisco: Machine Learning Intern",
      description:
        "At Cisco, I built machine learning pipelines to analyze network data and improve system performance.",
      images: ["/images/cisco1.jpg"],
      youtubeUrl: "https://www.youtube.com/embed/yjtrb_KNJv0"
    },
    "Cisco: Data Science": {
      title: "Cisco: Data Science Intern",
      description:
        "My role at Cisco focused on extracting insights from data and delivering actionable analytics.",
      images: ["/images/trust.png"],
      youtubeUrl: "https://www.youtube.com/embed/F8oQlHoYK_o"

    },
    "Lockheed Martin x2: Software Engineering Intern": {
      title: "Lockheed Martin: Software Enginering Intern",
      description:
        "At Lockheed Martin, I worked on simulation systems for advanced aerospace projects.",
      images: ["/images/cornfield.jpg"],
      youtubeUrl: "https://www.youtube.com/embed/hb4yP8dKJ78"

    },
    "Lockheed Martin: Cyber": {
      title: "Lockheed Martin: Cybersecurity Intern",
      description:
        "My role involved designing secure systems for sensitive government projects at Lockheed Martin.",
      images: ["/images/cyberkillchain.png"],
      youtubeUrl: "https://www.youtube.com/embed/e0_-jPwMnCA"

    },
  };

  return (
    <div className="professional-container">
      {/* Sidebar Component */}
      <Sidebar
        jobs={Object.keys(jobs)}
        selectedJob={selectedJob}
        onSelect={setSelectedJob}
      />

      {/* Content Component */}
      <Content jobDetails={jobs[selectedJob]} />
    </div>
  );
};

export default Professional;