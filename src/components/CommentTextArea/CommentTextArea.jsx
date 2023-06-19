import React from 'react';
import './CommentTextArea.css';

const CommentTextArea = ({ value, handleChange, isDisabled }) => {
  return (
    <div className="comment-text-area">
      <label hidden>Comment</label>
      <textarea
        value={value}
        placeholder="Enter a comment"
        rows={4}
        cols={30}
        disabled={isDisabled}
        onChange={(event) => handleChange(event.target.value)}
      />
    </div>
  );
};

export default CommentTextArea;
