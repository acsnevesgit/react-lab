import { configureStore } from '@reduxjs/toolkit';

// Reducers
// import allReducers from '../reducers';
import counterReducer from '../reducers/CounterReducer';
import questionreducer from '../reducers/QuestionReducer';

// Creates a Redux store and automatically configures the Redux DevTools extension
export default configureStore({
  // Tell the store to use this slice reducer function to handle all updates to that state
  reducer: {
    counter: counterReducer,
    question: questionreducer,
  },
});