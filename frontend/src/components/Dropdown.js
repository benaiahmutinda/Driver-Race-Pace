import React, { useState, useEffect } from "react";
import "./Dropdown.css";

const Dropdown = ({ onSelect, preFillerText, optionsData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(preFillerText);

  useEffect(() => {
    setSelectedOption(preFillerText); // Reset selectedOption when optionsData changes
  }, [optionsData, preFillerText]);

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
        <span>{selectedOption || preFillerText}</span>
        <i className="dropdown-arrow arrow" />
      </div>
      {isOpen && (
        <ul className="dropdown-options">
          {optionsData.map((option) => (
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
