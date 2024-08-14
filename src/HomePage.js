import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import video from "./background.mp4";
import image from "./kid.jpg";

const HomePage = () => {
  const navigate = useNavigate();

  const handleCardClick = (kid) => {
    navigate(`/kid/${kid}`);
  };

  return (
    <div className="homepage">
      <video autoPlay muted loop id="myVideo" className="bg-video">
        <source src={video} type="video/mp4" />
      </video>

      <div className="title">
        <h1>Student Progress Tracker</h1>
      </div>

      <div className="card-container">
        <div className="card" onClick={() => handleCardClick("Kid1")}>
          <h2 className="card-title">Kid 1</h2>
          <img src={image} alt="Kid 1" className="card-image" />
          <button className="card-button">Click Here!</button>
        </div>
        <div className="card" onClick={() => handleCardClick("Kid2")}>
          <h2 className="card-title">Kid 2</h2>
          <img src={image} alt="Kid 2" className="card-image" />
          <button className="card-button">Click Here!</button>
        </div>
        <div className="card" onClick={() => handleCardClick("Kid3")}>
          <h2 className="card-title">Kid 3</h2>
          <img src={image} alt="Kid 3" className="card-image" />
          <button className="card-button">Click Here!</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
