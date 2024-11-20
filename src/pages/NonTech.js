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
      description: "Founded in 1871 as the “University Orchestra,” the Cornell Orchestras is one of the oldest organizations on campus. Composed today of the Cornell Symphony Orchestra and the Cornell Chamber Orchestra, it was created by a community of students who sought to perform music for the enjoyment of the community. The ensembles are made of approximately 100 young musicians dedicated to performing a variety of repertoire that encompasses works from the baroque to the 21st century. The orchestras present seven to eight concerts a season, which include world premieres, performances with concerto competition winners, and the Annual Young Person’s concert. \n I have been playing viola for the last 15 years, and I've continued playing in large-scale orchestras throughout college. I'm currently the Principal Violist for the Cornell Symphony Orchestra, and I've been a part of this orchestra for the past 4 years. I'm very excited for our upcoming concert, where we're playing Bartok Violin Concerto No. 1 and Brahms Academic Festival Overture. Other notable pieces include Dvorak New World Symphony and Tchaikovsky Romeo and Juliet. Take a look at some of my media below!",
      youtubeUrl: "https://www.youtube.com/embed/xfJcI8yLcs8", // Add YouTube URL if applicable
      images: ["/images/viola.png"],
    },
    "Cornell Electric Vehicles": {
      title: "Cornell Electric Vehicles",
      description: "Cornell Electric Vehicles Project Team is the foremost project team at Cornell University dedicated to building autonomous, hyper-efficient electric cars. \nOur deeply knowledgeable interdisciplinary organization operates at the pace of a startup and has repeatedly produced industry-grade vehicles. Having placed highly at Shell Eco-Marathon Americas, we are a respected team operating at the limits of emergent technologies.\nEndeavoring to integrate level 2 autonomy into our vehicles reflects our determination to continue forging at the leading edge of innovation. \n As the current Full Team Lead, I'm in charge of keeping the team running, funded, and marketed. I also handle public relations and meet regularly with our biggest sponsors. Previously, I was the Software Lead, where I focused on project and people management for the Data Apps and Analysis subteam, which creates data visualizations and live time analysis. I focused on front-end design and system architecture!",
      images: ["/images/cev1.png", "/images/cev2.png"],
    },
    "Cedar Run Wildlife Refuge": {
      title: "Cedar Run Wildlife Refuge",
      description: "During my senior year of high school, I volunteered regularly at Cedar Run, where I specialized in baby bird care. From the moment they hatch from their egg until they are released, I was in charge of making sure they were fed, cleaned, and medicated. I learned about the specific birds in New Jersey, and I now can tell the species apart. This was a transformative experience for myself, as I don't normally work with my hands. But, I was able to save many birds' lives that summer and I became the local expert!",
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