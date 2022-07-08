import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; //  access the state, update the state
import FetchButton from './FetchButton';

// Reducers
import { changeLoading, changeCategory, changeDifficulty, changeType, changeNumber } from '../reducers/QuestionReducer';

// Using react-redux:
// - replace state hooks with useSelector
// - replace setState with actions

const QuizSettings = () => {
  const [options, setOptions] = useState(null);

  // Read data from the store with hook useSelector and dispatch actions with hook useDispatch
  const loading = useSelector(state => state.quiz.options.loading);
  const questionCategory = useSelector(state => state.quiz.options.question_category);
  const questionDifficulty = useSelector(state => state.quiz.options.question_difficulty);
  const questionType = useSelector(state => state.quiz.options.question_type);
  const numberOfQuestions = useSelector(state => state.quiz.options.number_of_questions);

  const dispatch = useDispatch();

  // ------------------------------------------ Functions ------------------------------------------
  // Fetch question categories from API
  useEffect(() => {
    const apiUrl = 'https://opentdb.com/api_category.php';
    dispatch(changeLoading(true));
    fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        dispatch(changeLoading(false));
        setOptions(response.trivia_categories);
      });
  }, [setOptions, dispatch]);

  // ------------------------------------------ Render ------------------------------------------

  return (
    <div>
      {loading ? (
        <p>
          Loading...
        </p>
      ) : (
        <div>
          <div>
            <h4>Select Quiz Category:</h4>
            <select className='quiz-option' value={questionCategory} onChange={(event) => dispatch(changeCategory(event.target.value))}>
              <option>All</option>
              {options &&
                options.map((option) => (
                  <option value={option.id} key={option.id}>
                    {option.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <h4>Select Difficulty Level:</h4>
            <select className='quiz-option' value={questionDifficulty} onChange={(event) => dispatch(changeDifficulty(event.target.value))}>
              <option value='' key='difficulty-0'>All</option>
              <option value='easy' key='difficulty-1'>Easy</option>
              <option value='medium' key='difficulty-2'>Medium</option>
              <option value='hard' key='difficulty-3'>Hard</option>
            </select>
          </div>
          <div>
            <h4>Select Question Type:</h4>
            <select className='quiz-option' value={questionType} onChange={(event) => dispatch(changeType(event.target.value))}>
              <option value='' key='type-0'>All</option>
              <option value='multiple' key='type-1'>Multiple Choice</option>
              <option value='boolean' key='type-2'>True/False</option>
            </select>
          </div>
          <div>
            <h4>Number of Questions:</h4>
            <input className='quiz-option' value={numberOfQuestions} onChange={(event) => dispatch(changeNumber(event.target.value))} />
          </div>
          <FetchButton text='Start!' />
        </div>
      )}
    </div >
  )
};

export default QuizSettings;
