import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

//Reducers
import { setQuestions, setIndex, setScore } from '../reducers/QuestionReducer';

// Components
import FetchButton from './FetchButton';

const QuizEnd = () => {
  const score = useSelector((state) => state.quiz.score);

  const dispatch = useDispatch();

  const replay = () => {
    dispatch(setIndex(0));

    dispatch(setScore(0));
  };

  const settings = () => {
    dispatch(setQuestions([]));
    dispatch(setScore(0));
  };

  // ------------------------------------------ Render ------------------------------------------

  return (
    <div>
      <h4>Final Score: {score}</h4>
      <Button
        className='fetch-btn'
        variant='contained'
        onClick={replay}>Try again</Button>
      <FetchButton text='Fetch new questions' />
      <Button
        className='fetch-btn'
        variant='contained'
        onClick={settings}>Back to settings</Button>
    </div>
  )
};

export default QuizEnd;