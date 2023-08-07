import React, { useState, useEffect } from "react";
import Dropdown from "../Dropdown";
import "../../App.css";
import "./RacePace.css";
import axios from "axios";

function RacePace() {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedRace, setSelectedRace] = useState(null);
  const [yearOptions, setYearOptions] = useState([]);
  const [raceOptions, setRaceOptions] = useState([]);

  // Fetch year options from the API endpoint using Axios
  useEffect(() => {
    axios
      .get("http://localhost:5000/year-dropdown-options")
      .then((response) => {
        const yearData = response.data;
        setYearOptions(yearData); // Store the fetched year options in the state
      })
      .catch((error) => {
        console.error("Error fetching year dropdown options:", error);
      });
  }, []);

  // Fetch race options when a valid year is selected
  useEffect(() => {
    if (selectedYear && selectedYear !== "Select a year") {
      axios
        .get(
          `http://localhost:5000/race-dropdown-options?season=${selectedYear}`
        )
        .then((response) => {
          const raceOptionsData = response.data;
          setRaceOptions(raceOptionsData);
          if (raceOptionsData.length > 0) {
            setSelectedRace(raceOptionsData[0]);
          }
        })
        .catch((error) => {
          console.error("Error fetching race dropdown options:", error);
        });
    }
  }, [selectedYear]);

  const handleYearSelect = (selectedOption) => {
    setSelectedYear(selectedOption);
    setSelectedRace(null);
  };

  const handleRaceSelect = (selectedOption) => {
    setSelectedRace(selectedOption);
  };

  return (
    <React.Fragment>
      <h1>Race Pace</h1>
      <div className="dropdown-container-wrapper">
        <Dropdown
          onSelect={handleYearSelect}
          preFillerText={"Select a year"}
          optionsData={yearOptions} // Pass year options as the optionsData prop
        />
        {selectedYear && raceOptions.length > 0 && (
          <Dropdown
            onSelect={handleRaceSelect}
            preFillerText={"Select a race"}
            optionsData={raceOptions} // Pass race options as the optionsData prop
          />
        )}
      </div>
    </React.Fragment>
  );
}

export default RacePace;
