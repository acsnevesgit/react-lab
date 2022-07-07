import { createSlice } from '@reduxjs/toolkit';

const initState = {
  options: {
    loading: false,
    question_category: ``,
    question_difficulty: ``,
    question_type: ``,
    number_of_questions: 12
  },
  questions: [],
  index: 0,
  score: 0
};

const QuestionReducer = createSlice({
  name: 'questions',
  initialState: initState,
  reducers: {
    changeLoading: (state, action) => {
      return {
        ...state,
        options: {
          ...state.options,
          loading: action.loading
        }
      }
    },
    changeCategory: (state, action) => {
      return {
        ...state,
        options: {
          ...state.options,
          question_category: action.question_category
        }
      }
    },
    changeDifficulty: (state, action) => {
      return {
        ...state,
        options: {
          ...state.options,
          question_difficulty: action.question_difficulty
        }
      }
    },
    changeType: (state, action) => {
      return {
        ...state,
        options: {
          ...state.options,
          question_type: action.question_type
        }
      }
    },
    changeNumber: (state, action) => {
      return {
        ...state,
        options: {
          ...state.options,
          number_of_questions: action.number_of_questions
        }
      }
    },
    setQuestions: (state, action) => {
      return {
        ...state,
        questions: action.questions
      }
    },
    setIndex: (state, action) => {
      return {
        ...state,
        index: action.index
      }
    },
    setScore: (state, action) => {
      return {
        ...state,
        score: action.score
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeLoading, changeCategory, changeDifficulty, changeType, changeNumber, setQuestions, setIndex, setScore } = QuestionReducer.actions;
export default QuestionReducer.reducer;