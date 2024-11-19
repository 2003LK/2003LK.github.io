import React, { useState } from "react";
import Sidebar from "./Sidebar2";
import Content from "./Content";
import "./NonTech.css";

const NonTech = () => {
  const [selectedActivity, setSelectedActivity] = useState("Cornell Symphony Orchestra");

  // Non-Tech Activities Data
  const activities = {
    "Cornell Symphony Orchestra": {
      title: "Cornell Symphony Orchestra",
      description: "DESCRIPTION OF THE ORCHESTRA AND WHAT I DO",
      youtubeUrl: "https://www.youtube.com/embed/xfJcI8yLcs8", // Add YouTube URL if applicable
      images: ["/images/viola.png"],
    },
    "Cornell Electric Vehicles": {
      title: "Cornell Electric Vehicles",
      description: "DESCRIPTION OF THE TEAM AND MY ROLE",
      images: ["/images/cev1.png", "/images/cev2.png"],
    },
    "Cedar Run Wildlife Refuge": {
      title: "Cedar Run Wildlife Refuge",
      description: "Volunteer work at the Wildlife Refuge.",
      youtubeUrl: "https://www.youtube.com/embed/uwbY5-ihaNU", // Add YouTube URL if applicable
      images: ["/images/wildlife1.png", "/images/wildlife2.png"],
    },
  };

  return (
    <div className="nontech-container">
      <Sidebar
        items={Object.keys(activities)}
        selectedItem={selectedActivity}
        onSelect={setSelectedActivity}
      />
      <Content jobDetails={activities[selectedActivity]} />
    </div>
  );
};

export default NonTech;