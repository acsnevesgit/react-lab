import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

//Reducers
import { setQuestions, setIndex, setScore } from '../reducers/QuestionReducer';

// Components
import QuizFetchButton from './QuizFetchButton';
import { DarkModeContext } from '../contexts/DarkModeContext';

const QuizEnd = () => {
  const { darkMode } = useContext(DarkModeContext);

  const score = useSelector((state) => state.quiz.score);
  const questions = useSelector((state) => state.quiz.questions);

  const percentage = score / questions.length;

  let reaction;
  if (percentage < 0.5) {
    reaction = <><p>You can always try again... 🤫</p></>
  } else if (percentage >= 0.5 && percentage < 0.75) {
    reaction = <><p>Not bad, not bad... 🤔</p></>
  } else if (percentage >= 0.75 && percentage < 0.95) {
    reaction = <><p>Quite impressive! 🤓</p></>
  } else {
    reaction = <><p>W-O-W! You are a genius! 🧐</p></>
  };

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
        <p className='paragraph'>Final Score: {score} / {questions.length}</p>
        <p className='paragraph result-reaction'>{reaction}</p>
      </div>
      <div className='all-quiz-btn'>
        <Button
          className='fetch-btn'
          variant='contained'
          onClick={replay}>Try again
        </Button>
        <QuizFetchButton text='Fetch new questions' />
        <Button
          className='fetch-btn'
          variant='contained'
          onClick={settings}>Back to settings
        </Button>
      </div>
    </div >
  )
};

export default QuizEnd;