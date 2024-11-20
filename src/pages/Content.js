import React from "react";

const Content = ({ jobDetails }) => {
  if (!jobDetails) return <p>No details available.</p>;

  return (
    <div className="content">
      <h1>{jobDetails.title}</h1>
      <p>{jobDetails.description}</p>

      {/* Render YouTube video if youtubeUrl exists */}
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

      {/* Render local video if videoUrl exists */}
      {jobDetails.videoUrl && (
        <div className="video-container">
          <video width="100%" height="400" controls>
            <source src={jobDetails.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Render images if available */}
      <div className="images">
        {jobDetails.images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="content-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Content;