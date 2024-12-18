import React, { useState } from "react";
import "./Professional.css";

const ExpandableContent = ({ jobDetails }) => {
  const [expandedImage, setExpandedImage] = useState(null);

  if (!jobDetails) return <p>No details available.</p>;

  return (
    <div className="content">
      <h1>{jobDetails.title}</h1>

      {/* Text Content with Image Wrapped */}
      <div className="text-content">
        {jobDetails.images && jobDetails.images.length > 0 && (
          <img
            src={jobDetails.images[0]} // Show the first image inline
            alt="Wrapped Content"
            className="content-image"
            onClick={() => setExpandedImage(jobDetails.images[0])}
          />
        )}
        <p>{jobDetails.description}</p>
      </div>

      {/* Video Section */}
      {jobDetails.youtubeUrl && (
        <div className="video-container">
          <iframe
            width="100%"
            height="400"
            src={jobDetails.youtubeUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Full-Screen Image Overlay */}
      {expandedImage && (
        <div className="image-overlay" onClick={() => setExpandedImage(null)}>
          <div className="overlay-content">
            <img src={expandedImage} alt="Expanded" className="expanded-image" />
            <button
              className="close-overlay"
              onClick={() => setExpandedImage(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpandableContent;