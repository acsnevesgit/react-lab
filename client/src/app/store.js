import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

// Creates a Redux store and also automatically configures the Redux DevTools extension

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});