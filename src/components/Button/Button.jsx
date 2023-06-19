import React from 'react';
import './Button.css';

const Button = ({ label, isDisabled, handleClick }) => {
  return (
    <button className="button" disabled={isDisabled} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
