import React from "react";

const Sidebar = ({ jobs, selectedJob, onSelect }) => {
  return (
    <div className="sidebar">
      <h2>Full Time</h2>
      <ul>
        {jobs
          .filter((job) => job.includes("Full Time"))
          .map((job) => (
            <li
              key={job}
              className={job === selectedJob ? "active" : ""}
              onClick={() => onSelect(job)}
            >
              {job.split(":")[0]}
            </li>
          ))}
      </ul>

      <h2>Internships</h2>
      <ul>
        {jobs
          .filter((job) => job.includes("Internship") || !job.includes("Full Time"))
          .map((job) => (
            <li
              key={job}
              className={job === selectedJob ? "active" : ""}
              onClick={() => onSelect(job)}
            >
              {job.split(":")[0]}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;