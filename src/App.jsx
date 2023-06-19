import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header/Header';
import InputSection from './components/InputSection/InputSection';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

import { Api } from './api';
import CommentsWrapper from './components/CommentsWrapper/CommentsWrapper';

const App = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handeNewComment = async (id) => {
    const commentData = await Api.get('/getComments');
    const comment = commentData.find((comment) => comment.id === id);
    setComments(commentData);
    window.alert(`New comment from ${comment.name}`);
  };

  const handleDeleteComments = () => {
    setComments([]);
  };

  const handleGetComments = async () => {
    try {
      const commentData = await Api.get('/getComments');
      setComments(commentData);
      setIsLoading(false);
    } catch (err) {
      setError(err);
    }
    setTimeout(() => setIsLoading(false), 1500);
  };

  useEffect(() => {
    handleGetComments();
  }, []);

  return (
    <div className="app">
      <Header />
      <InputSection handeNewComment={handeNewComment} />
      {error != null && <ErrorMessage err={error} />}
      {isLoading && <LoadingSpinner />}
      {!isLoading && comments.length > 0 && (
        <CommentsWrapper
          comments={comments}
          handleDeleteComments={handleDeleteComments}
        />
      )}
    </div>
  );
};

export default App;
