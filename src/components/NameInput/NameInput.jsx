import React from 'react';
import './NameInput.css';

const NameInput = ({ value, handleChange, isDisabled }) => {
  return (
    <div className="name-input">
      <label hidden>Name</label>
      <input
        type="text"
        value={value}
        placeholder="Enter your name"
        disabled={isDisabled}
        onChange={(event) => handleChange(event.target.value)}
      />
    </div>
  );
};

export default NameInput;
