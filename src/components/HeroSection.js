import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src="/videos/video-2.mp4" autoPlay loop mute="true" /> */}
      <h1>Untamed nature</h1>
      <p> Creation in it's own environment </p>
      {/* <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          PLAY <i className="far fa-play-circle"></i>
        </Button>
      </div> */}
    </div>
  );
}

export default HeroSection;
