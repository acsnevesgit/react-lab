import counterReducer from './CounterReducer';
import questionReducer from './QuestionReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  question: questionReducer
});

export default allReducers;