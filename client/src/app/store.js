import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counterSlice';

// Creates a Redux store and automatically configures the Redux DevTools extension
export default configureStore({
  // Tell the store to use this slice reducer function to handle all updates to that state
  reducer: {
    counter: counterReducer,
  },
});