import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import "./Professional.css";
import ExpandableContent from "./ExpandableContent";

const Professional = () => {
  // State for the currently selected job/internship
  const [selectedJob, setSelectedJob] = useState("Microsoft: Full Time");

  // Data for jobs and internships
  const jobs = {
    "Microsoft: Full Time Software Engineer": {
      title: "Microsoft: Software Engineer on Azure Databricks",
      description:
        "I'm so excited to return to Microsoft in August as a Software Engineer for Azure Core, specfically on the Azure Databricks team. While I'm not sure of my specific responsibilities yet, I'm excited to be joining at Level 60 which means increased accountability! For more information on what the team does, check out the media below and read about what I did this past summer on that same team!",
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
        "During my second internship at Cisco, I worked on log threshold detection for early notification of security threats and outages. Specifically, I used various algorithms (ARIMA, StateSpaceForecast) available through the Splunk Machine Learning toolkit to evaluate the effectiveness of each at determining a precise and accurate confidence interval for future log counts, and I tuned the parameters of each to best compare and get the most accurate results. Once I chose an algorithm that had the most specific results, I implemented periods into the threshold detection, as logs went down during the night and during the weekends, and we want our confidence intervals to reflect that. Thus, I was able to get a narrow confidence interval above and below the true log count, and predict future log counts. This project was done using Python and various Machine Learning toolkits.",
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
      <ExpandableContent jobDetails={jobs[selectedJob]} />
    </div>
  );
};

export default Professional;