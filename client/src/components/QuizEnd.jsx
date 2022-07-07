import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

  return (
    <div>
      <h3>Final Score: {score}</h3>
      <button onClick={replay}>Try again</button>
      <FetchButton text='Fetch new questions' />
      <button onClick={settings}>Back to settings</button>
    </div>
  )
};

export default QuizEnd;