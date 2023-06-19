import React, { useState } from 'react';
import CommentTextArea from '../CommentTextArea/CommentTextArea';
import NameInput from '../NameInput/NameInput';
import Button from '../Button/Button';
import { Api } from '../../api';
import './InputSection.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const InputSection = ({ handeNewComment }) => {
  const [nameValue, setNameValue] = useState('');
  const [commentValue, setCommentValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePostComment = async () => {
    setIsLoading(true);
    const body = {
      name: nameValue,
      message: commentValue,
      created: Date.now(),
    };
    try {
      const { id } = await Api.post('/createComment', body);
      handeNewComment(id);
    } catch (err) {
      setError(err);
    }
    setTimeout(() => {
      setIsLoading(false);
      setNameValue('');
      setCommentValue('');
    }, 1500);
  };

  return (
    <div className="input-section">
      <NameInput
        value={nameValue}
        handleChange={setNameValue}
        isDisabled={isLoading}
      />
      <CommentTextArea
        value={commentValue}
        handleChange={setCommentValue}
        isDisabled={isLoading}
      />
      <Button
        label="Post Comment"
        isDisabled={isLoading}
        handleClick={handlePostComment}
      />
      {error != null && <ErrorMessage err={error} />}
    </div>
  );
};

export default InputSection;
