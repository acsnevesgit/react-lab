import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';
import {
  Layout,
  CardPayment,
  ChatBot,
  CustomCounter,
  DateSelector,
  EmailHandler,
  FormValidation,
  ImageList,
  LanguageSelector,
  ListManagement,
  ReportAnalytics,
  SearchFilter,
  ProgressBar,
  StepperEdit,
  TimelineGraph,
  UserInfo,
  WeatherForecast,
} from './pages/index';
import { DarkModeProvider } from './contexts/DarkModeContext';

// TODO:
// ------------------ User Authentication ------------------
export const AuthContext = createContext(); // Pass the auth state to any other component that requires it

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

// Check if user is authenticated, exists user data and token was sent back from the server after login
const reducer = (state, action) => {
  switch (action.type) {
    // Actions in the reducer: LOGIN and LOGOUT
    case 'LOGIN':
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('token', JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'LOGOUT':
      localStorage.clear('user', 'token');
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState); // If no action is dispatched, return the initial state

  // ------------------------------------------ Render ------------------------------------------

  return (
    <>
      <DarkModeProvider>
        <AuthContext.Provider value={{ state, dispatch }}>
          <Router>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route path='cardpayment' element={<CardPayment />} />
                <Route path='chatbot' element={<ChatBot />} />
                <Route path='customcounter' element={<CustomCounter />} />
                <Route path='dateselector' element={<DateSelector />} />
                <Route path='emailhandler' element={<EmailHandler />} />
                <Route path='formvalidation' element={<FormValidation />} />
                <Route path='imagelist' element={<ImageList />} />
                <Route path='languageselector' element={<LanguageSelector />} />
                <Route path='listmanagement' element={<ListManagement />} />
                <Route
                  path='reportandanalytics'
                  element={<ReportAnalytics />}
                />
                <Route path='searchfilter' element={<SearchFilter />} />
                <Route path='progressbar' element={<ProgressBar />} />
                <Route path='stepperedit' element={<StepperEdit />} />
                <Route path='timelinegraph' element={<TimelineGraph />} />
                {!state.isAuthenticated ? (
                  <Route path='userinfo' element={<UserInfo />} />
                ) : (
                  <Route path='/' element={<Layout />} />
                )}
                <Route path='weatherforecast' element={<WeatherForecast />} />
                <Route
                  path='*'
                  element={
                    <main>
                      <p>Sorry! This page does not exist.</p>
                    </main>
                  }
                />
              </Route>
            </Routes>
          </Router>
        </AuthContext.Provider>
      </DarkModeProvider>
    </>
  );
};

export default App;
