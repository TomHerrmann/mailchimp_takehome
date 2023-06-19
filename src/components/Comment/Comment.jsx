import React from 'react';
import './Comment.css';

const Comment = ({ name, created, message }) => {
  const date = new Date(created);
  return (
    <div className="comment">
      <strong>{message}</strong>
      <small>{`Posted: ${date.toLocaleString('en-US')} by ${name}`}</small>
    </div>
  );
};

export default Comment;
