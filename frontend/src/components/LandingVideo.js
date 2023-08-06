import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./LandingVideo.css";

function LandingVideo() {
  return (
    <div className="landing-video-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <div className="landing-video-btns">
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
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default LandingVideo;
