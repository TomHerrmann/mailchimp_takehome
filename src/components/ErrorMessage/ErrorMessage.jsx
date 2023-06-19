import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = ({ err }) => {
  return <h2>ERROR: {err.message}</h2>;
};

export default ErrorMessage;
