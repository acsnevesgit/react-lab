import { createSlice } from '@reduxjs/toolkit';

const initState = {
  questions: [],
  index: 0,
  score: 0,
  options: {
    loading: false,
    question_category: ``,
    question_difficulty: ``,
    question_type: ``,
    number_of_questions: 30,
  },
};

const QuestionReducer = createSlice({
  name: 'quiz',
  initialState: initState,
  reducers: {
    changeLoading: (state, action) => {
      state.options.loading = action.payload;
    },
    changeCategory: (state, action) => {
      state.options.question_category = action.payload;
    },
    changeDifficulty: (state, action) => {
      state.options.question_difficulty = action.payload;
    },
    changeType: (state, action) => {
      state.options.question_type = action.payload;
    },
    changeNumber: (state, action) => {
      state.options.number_of_questions = action.payload;
    },
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    setIndex: (state, action) => {
      state.index += action.payload;
    },
    setScore: (state, action) => {
      state.score += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeLoading, changeCategory, changeDifficulty, changeType, changeNumber, setQuestions, setIndex, setScore } = QuestionReducer.actions;
export default QuestionReducer.reducer;