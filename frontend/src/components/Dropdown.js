import React, { useState, useEffect } from "react";
import "./Dropdown.css";
import axios from "axios";

const Dropdown = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Fetch options from the API endpoint using Axios
    axios
      .get("http://localhost:5000/year-dropdown-options")
      .then((response) => {
        // Extract the options array from the response
        const optionsData = response.data;
        console.log(optionsData);
        setOptions(optionsData);
      })
      .catch((error) => {
        console.error("Error fetching dropdown options:", error);
      });
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span>{selectedOption || "Select an option"}</span>
        <i className={`arrow ${isOpen ? "up" : "down"}`} />
      </div>
      {isOpen && (
        <ul className="dropdown-options">
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
