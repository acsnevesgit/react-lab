import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import { Layout, Homepage, CardPayment, CustomCounter, DatePicker, Email, FormValidation,ImageList, LanguageSelector, ListManagement, MovieSearch, StepperEdit } from './pages/index';

const App = () => {
  // ----- Render -----

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Layout />}
        >
          <Route
            path='/homepage'
            element={
              <Homepage />
            }
          />
          <Route
            path='cardpayment'
            element={
              <CardPayment />
            }
          />
          <Route
            path='customcounter'
            element={
              <CustomCounter />
            }
          />
          <Route
            path='datepicker'
            element={
              <DatePicker />
            }
          />
          <Route
            path='email'
            element={
              <Email />
            }
          />
          <Route
            path='formvalidation'
            element={
              <FormValidation />
            }
          />
          <Route
            path='imagelist'
            element={
              <ImageList />
            }
          />
          <Route
            path='languageselector'
            element={
              <LanguageSelector />
            }
          />
          <Route
            path='listmanagement'
            element={
              <ListManagement />
            }
          />
          <Route
            path='moviesearch'
            element={
              <MovieSearch />
            }
          />
          <Route
            path='stepperedit'
            element={
              <StepperEdit />
            }
          />
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
  );
};

export default App;

