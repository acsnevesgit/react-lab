import React from 'react';
import { useSelector } from 'react-redux';

// Components
import QuizEnd from '../components/QuizEnd';
import QuizQuestion from '../components/QuizQuestion';
import QuizSettings from '../components/QuizSettings';

const QuizGame = () => {
  const questions = useSelector((state) => state.quiz.questions);
  const questionIndex = useSelector((state) => state.quiz.index);

  console.log(questions);

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
      <p className='first-line paragraph'>🚧</p>
      <div className='questions-container'>{component}</div>
    </div >
  );
};

export default QuizGame;
