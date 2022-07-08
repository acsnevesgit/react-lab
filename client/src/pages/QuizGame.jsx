import React from 'react';
import { useSelector } from 'react-redux';

// Components
import QuizEnd from '../components/QuizEnd';
import QuizQuestion from '../components/QuizQuestion';
import QuizSettings from '../components/QuizSettings';

const QuizGame = () => {
  const questions = useSelector((state) => state.quiz.questions);
  const questionIndex = useSelector((state) => state.quiz.index);

  let component;

  if (questions.length && questionIndex + 1 <= questions.length) {
    component = <QuizQuestion />
  } else if (!questions.length) {
    component = <QuizSettings />
  } else {
    component = <QuizEnd />
  };

  // ------------------------------------------ Render ------------------------------------------

  return (
    <div className='main'>
      <h3>Quiz Game</h3>
      <p className='first-line paragraph'>
        Here you can take a quiz and test your knowledge. The quiz is configurable regarding category, difficulty level and more.
      </p>
      <p className='last-line paragraph'>
        This feature was created with the help of {''}
        <i><b>react-redux</b></i> package and the {''}
        <b><a href='https://opentdb.com/api_config.php/'>Open Trivia Database</a></b> API.
      </p>
      <div className='questions-container'>{component}</div>
    </div >
  );
};

export default QuizGame;
