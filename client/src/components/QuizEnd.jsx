import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

//Reducers
import { setQuestions, setIndex, setScore } from '../reducers/QuestionReducer';

// Components
import FetchButton from './FetchButton';
import { DarkModeContext } from '../contexts/DarkModeContext';

const QuizEnd = () => {
  const { darkMode } = useContext(DarkModeContext);

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
      <div className={darkMode ? 'final-score final-score-dark' : 'final-score final-score-light'}>
        Final Score: {score}
      </div>
      <div className='all-quiz-btn'>
        <Button
          className='fetch-btn'
          variant='contained'
          onClick={replay}>Try again
        </Button>
        <FetchButton text='Fetch new questions' />
        <Button
          className='fetch-btn'
          variant='contained'
          onClick={settings}>Back to settings
        </Button>
      </div>
    </div>
  )
};

export default QuizEnd;