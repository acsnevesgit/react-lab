import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { Layout, CardPayment, ChatBot, CustomCounter, DatePicker, EmailHandler, FormValidation, ImageList, LanguageSelector, ListManagement, ReportAnalytics, SearchFilter, ProgressBar, StepperEdit, TimelineGraph, WeatherForecast } from './pages/index';

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
            path='chatbot'
            element={
              <ChatBot />
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
            path='reportandanalytics'
            element={
              <ReportAnalytics />
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
            path='weatherforecast'
            element={
              <WeatherForecast />
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

