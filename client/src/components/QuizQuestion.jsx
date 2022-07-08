import React, { useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Reducers
import { setIndex, setScore } from '../reducers/QuestionReducer';

// Components
import { DarkModeContext } from '../contexts/DarkModeContext';

// Function to decode the text sent from the API
const decodeHTML = function (html) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

const QuizQuestion = () => {
  const { darkMode } = useContext(DarkModeContext);

  const [questions, setQuestions] = useState([]);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [options, setOptions] = useState([]);

  // TODO: fix score
  const score = useSelector((state) => state.quiz.score);
  const encodedQuestions = useSelector((state) => state.quiz.questions);

  useEffect(() => {
    const decodedQuestions = encodedQuestions.map(q => {
      return {
        ...q,
        question: decodeHTML(q.question),
        correct_answer: decodeHTML(q.correct_answer),
        incorrect_answers: q.incorrect_answers.map(a => decodeHTML(a))
      };
    });
    setQuestions(decodedQuestions);
  }, [encodedQuestions]);

  const questionIndex = useSelector((state) => state.quiz.index);

  const dispatch = useDispatch();

  const question = questions[questionIndex];
  const answer = question && question.correct_answer;

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  useEffect(() => {
    if (!question) {
      return;
    }

    let answers = [...question.incorrect_answers];
    answers.splice(getRandomInt(question.incorrect_answers.length), 0, question.correct_answer);
    setOptions(answers);
  }, [question]);

  const handleListItemClick = (event) => {
    setAnswerSelected(true);
    setSelectedAnswer(event.target.textContent);

    if (event.target.textContent === answer) {
      dispatch(setScore(score + 1))
    }

    if (questionIndex + 1 <= questions.length) {
      setTimeout(() => {
        setAnswerSelected(false);
        setSelectedAnswer(null);
        dispatch(setIndex(questionIndex + 1))
      }, 2500);
    }
  };

  const getClass = option => {
    if (!answerSelected) {
      return ``;
    }
    if (option === answer) {
      return `correct`;
    }
    if (option === selectedAnswer) {
      return `selected`;
    }
  };

  if (!question) {
    return <div>Loading...</div>
  };

  // ------------------------------------------ Render ------------------------------------------

  return (
    <div className='questions-box'>
      <h4>QUESTION {questionIndex + 1}</h4>
      <div className='question-answer'>
        <p className='question-ask'>{question.question}</p>
        <ul className='questions-list'>
          {options.map((option, i) => (
            <li key={i} onClick={handleListItemClick} className={getClass(option)}>
              {option}
            </li>
          ))}
        </ul>
      </div>
      <div className={darkMode ? 'current-score current-score-dark' : 'current-score current-score-light'}>
        Score: {score} / {questions.length}
      </div>
    </div>
  );
};

export default QuizQuestion;