import React from "react";

const Content = ({ jobDetails }) => {
  if (!jobDetails) return <p>No details available.</p>;

  return (
    <div className="content">
      <h1>{jobDetails.title}</h1>

      {/* Images Section */}
      {jobDetails.images && (
        <div className="image-container">
          {jobDetails.images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              className="wrapped-image"
            />
          ))}
        </div>
      )}

      {/* Text Content */}
      <div className="text-content">
        <p>{jobDetails.description}</p>
      </div>

      {/* Video Section */}
      {jobDetails.youtubeUrl && (
        <div className="video-container">
          <iframe
            src={jobDetails.youtubeUrl}
            title="YouTube video player"
            width="100%"
            height="400"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Content;