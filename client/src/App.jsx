import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import { Layout, CardPayment, CustomCounter, DatePicker, EmailHandler, FormValidation, ImageList, LanguageSelector, ListManagement, SearchFilter, ProgressBar, StepperEdit, TimelineGraph } from './pages/index';

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
            path='emailhandler'
            element={
              <EmailHandler />
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
            path='searchfilter'
            element={
              <SearchFilter />
            }
          />
          <Route
            path='progressbar'
            element={
              <ProgressBar />
            }
          />
          <Route
            path='stepperedit'
            element={
              <StepperEdit />
            }
          />
          <Route
            path='timelinegraph'
            element={
              <TimelineGraph />
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

