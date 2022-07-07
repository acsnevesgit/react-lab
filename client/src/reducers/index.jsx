import counterReducer from './CounterReducer';
import questionReducer from './QuestionReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  quiz: questionReducer
});

export default allReducers;