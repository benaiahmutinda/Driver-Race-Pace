import React from "react";
import Dropdown from "../Dropdown";
import "../../App.css";

function RacePace() {
  const options = ["Option 1", "Option 2", "Option 3"];

  const handleOptionSelect = (selectedOption) => {
    console.log("Selected Option:", selectedOption);
  };

  return (
    <React.Fragment>
      <h1>Race Pace</h1>
      <Dropdown options={options} onSelect={handleOptionSelect} />
    </React.Fragment>
  );
}

export default RacePace;
