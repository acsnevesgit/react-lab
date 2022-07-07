import React from 'react';
import { useSelector } from 'react-redux';

// Reducers
import { changeLoading, changeCategory, changeDifficulty, changeType, changeNumber, setQuestions, setIndex, setScore } from '../reducers/QuestionReducer';

// Components
import QuizEnd from '../components/QuizEnd';
import QuizQuestion from '../components/QuizQuestion';
import QuizSettings from '../components/QuizSettings';

const QuizGame = () => {
  // const questions = useSelector((state) => state.quiz.questions);
  // const questionIndex = useSelector((state) => state.quiz.index);

  // // console.log(questions);
  // // console.log(questionIndex);

  // let component;

  // if (questions.length && questionIndex + 1 <= questions.length) {
  //   component = <QuizQuestion />
  // } else if (!questions.length) {
  //   component = <QuizSettings />
  // } else {
  //   component = <QuizEnd />
  // };

  // console.log(component);

  // ------------------------------------------ Render ------------------------------------------

  return (
    <div className='main'>
      <h3>Quiz Game</h3>
      <p className='first-line paragraph'>🚧</p>
      <div className='questions-container'>
        <QuizQuestion />
        <QuizSettings />
        <QuizEnd />
      </div>
    </div >
  );
};

export default QuizGame;
