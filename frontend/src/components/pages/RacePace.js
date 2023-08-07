import React from "react";
import Dropdown from "../Dropdown";
import "../../App.css";

function RacePace() {
  const handleOptionSelect = (selectedOption) => {
    console.log("Selected Option:", selectedOption);
  };

  return (
    <React.Fragment>
      <h1>Race Pace</h1>
      <Dropdown onSelect={handleOptionSelect} />
    </React.Fragment>
  );
}

export default RacePace;
