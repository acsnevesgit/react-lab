import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';
import {
  Layout,
  Home,
  ArtDisplayer,
  CardPayment,
  ContactInfo,
  CustomCounter,
  DateSelector,
  EmailHandler,
  QuizGame,
  ImageGallery,
  LanguageSelector,
  ListManagement,
  MapInteractor,
  ReportAnalytics,
  SearchFilter,
  ProgressBar,
  StepperEditor,
  TimelineGraph,
  WeatherForecast,
} from './pages/index';

import { DarkModeProvider } from './contexts/DarkModeContext';

const App = () => {

  // ------------------------------------------ Render ------------------------------------------

  return (
    <>
      <DarkModeProvider>
        <Router>
          <Routes>
            <Route path='home' element={<Home />} />
            <Route path='/' element={<Layout />}>
              <Route path='artdisplayer' element={<ArtDisplayer />} />
              <Route path='cardpayment' element={<CardPayment />} />
              <Route path='contactinfo' element={<ContactInfo />} />
              <Route path='customcounter' element={<CustomCounter />} />
              <Route path='dateselector' element={<DateSelector />} />
              <Route path='emailhandler' element={<EmailHandler />} />
              <Route path='quizgame' element={<QuizGame />} />
              <Route path='imagegallery' element={<ImageGallery />} />
              <Route path='languageselector' element={<LanguageSelector />} />
              <Route path='listmanagement' element={<ListManagement />} />
              <Route path='mapinteractor' element={<MapInteractor />} />
              <Route path='reportandanalytics' element={<ReportAnalytics />} />
              <Route path='searchfilter' element={<SearchFilter />} />
              <Route path='progressbar' element={<ProgressBar />} />
              <Route path='steppereditor' element={<StepperEditor />} />
              <Route path='timelinegraph' element={<TimelineGraph />} />
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
      </DarkModeProvider>
    </>
  );
};

export default App;
