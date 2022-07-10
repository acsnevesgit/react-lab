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
      <p className='paragraph'>
        This was created with the help of {''}
        <i><b>react-redux</b></i> package and the {''}
        <b><a href='https://opentdb.com/api_config.php/'>Open Trivia Database</a></b> API and it supports the following features:
      </p>
      <ul className='calculator-list'>
        <li>after a user chooses an answer from the options, the correct answer is highlighted in green;</li>
        <li>each correct answer adds 1 point to the user's score. The user can score a maximum of points equal to the amount of questions of the quiz;</li>
        <li>the quiz will proceed to the next question (if there is any) 2 seconds after the current is answered;</li>
        <li>in the end, the user has the opportunity to retake the quiz, generate new questions under the same configuration or go back to the settings.</li>
      </ul>
      <div className='questions-container'>{component}</div>
    </div >
  );
};

export default QuizGame;
