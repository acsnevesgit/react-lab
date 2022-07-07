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

  const handleCategoryChange = event => {
    dispatch(changeCategory(event.target.value));
  };

  const handleDifficultyChange = event => {
    dispatch(changeDifficulty(event.target.value));
  };

  const handleTypeChange = event => {
    dispatch(changeType(event.target.value));
  };

  const handleNumberChange = event => {
    dispatch(changeNumber(event.target.value));
  };

  // Fetch question categories from API
  useEffect(() => {
    const apiUrl = `https://opentdb.com/api_category.php`;
    const handleLoadingChange = value => {
      dispatch(changeLoading(value));
    }
    handleLoadingChange(true);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        handleLoadingChange(false);
        setOptions(response.trivia_categories);
      });
  }, [setOptions, dispatch]);

  // ------------------------------------------ Render ------------------------------------------

  return (
    <div className='main'>
      <h3>Quiz Game</h3>
      <p className='first-line paragraph'>🚧</p>
      {loading ? (
        <p>
          LOADING...
        </p>
      ) : (
        <div>
          <div>
            <h4>Select Category:</h4>
            <select value={questionCategory} onChange={handleCategoryChange}>
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
            <h2>Select Difficulty:</h2>
            <select value={questionDifficulty} onChange={handleDifficultyChange}>
              <option value='' key='difficulty-0'>All</option>
              <option value='easy' key='difficulty-1'>Easy</option>
              <option value='medium' key='difficulty-2'>Medium</option>
              <option value='hard' key='difficulty-3'>Hard</option>
            </select>
          </div>
          <div>
            <h2>Select Question Type:</h2>
            <select value={questionType} onChange={handleTypeChange}>
              <option value='' key='type-0'>All</option>
              <option value='multiple' key='type-1'>Multiple Choice</option>
              <option value='boolean' key='type-2'>True/False</option>
            </select>
          </div>
          <div>
            <h2>Amount of Questions:</h2>
            <input value={numberOfQuestions} onChange={handleNumberChange} />
          </div>
          <FetchButton text='Get started!' />
        </div>
      )}
    </div >
  )
};

export default QuizSettings;
