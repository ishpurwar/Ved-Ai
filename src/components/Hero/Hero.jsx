import React from "react";
import "./Hero.css";
import imghero from "../../assets/VEDAI-removebg-preview.png";
import Button from "../Button/Button";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_container">
        <div className="hero_container_content">
          <h1>
            Discovering
            <br />
            Wellness,<br /> the Ayurvedic <br /> Way!
          </h1>
          <div className="button">
            <Button text="Get Started" />
          </div>
        </div>
        <div className="hero_container_img">
          <img src={imghero} alt="" />
        </div>
      </div>
      <div className="grey_tri">
         <div className="grey1"></div>
      <div className="grey2"></div>
      </div>
     
    </div>
  );
};

export default Hero;
