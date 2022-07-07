import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Reducers
import { changeLoading, setIndex, setScore } from '../reducers/QuestionReducer';

const FetchButton = (props) => {
  // Access the settings that will be used to construct the API query
  const questionCategory = useSelector(state => state.quiz.options.question_category);
  const questionDifficulty = useSelector(state => state.quiz.options.question_difficulty);
  const questionType = useSelector(state => state.options.quiz.question_type);
  const questionNumber = useSelector(state => state.options.quiz.number_of_questions);
  const questionIndex = useSelector(state => state.quiz.index);

  const dispatch = useDispatch();

  const setLoading = value => {
    dispatch(changeLoading(value));
  };
  const setQuestions = value => {
    dispatch(setQuestions(value));
  };

  // ------------------------------------------ Functions ------------------------------------------

  const handleQuery = async () => {
    let apiUrl = `https://opentdb.com/api.php?amount=${questionNumber}`;

    if (questionCategory.length) {
      apiUrl = apiUrl.concat(`&category=${questionCategory}`);
    }
    if (questionDifficulty.length) {
      apiUrl = apiUrl.concat(`&difficulty=${questionDifficulty}`);
    }
    if (questionType.length) {
      apiUrl = apiUrl.concat(`&type=${questionType}`);
    }
    setLoading(true);

    await fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        // Set questions in the state using an action
        setQuestions(response.results);
        setLoading(false);
      });

    if (questionIndex > 0) {
      dispatch(setIndex(0));
      dispatch(setScore(0));
    }
  };

  // ------------------------------------------ Render ------------------------------------------

  return <button onClick={handleQuery}>{props.text}</button>;
};

export default FetchButton;