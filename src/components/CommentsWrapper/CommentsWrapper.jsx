import React, { useState } from 'react';
import './CommentsWrapper.css';

import Comment from '../Comment/Comment';
import Button from '../Button/Button';
import { Api } from '../../api';

const CommentsWrapper = ({ comments, handleDeleteComments }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteClick = async () => {
    setIsDeleting(true);
    await Api.delete('/deleteComments');
    setTimeout(() => {
      setIsDeleting(false);
      handleDeleteComments();
    }, 1500);
  };

  return (
    <>
      <div className="comments-wrapper">
        {comments.map(({ id, name, created, message }) => (
          <Comment
            name={name}
            created={created}
            message={message}
            key={`comment_${id}`}
          />
        ))}
      </div>
      <Button
        label="Delete All Comments"
        isDisabled={isDeleting}
        handleClick={handleDeleteClick}
      />
    </>
  );
};

export default CommentsWrapper;
