import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';
import {
  Layout,
  ArtDisplayer,
  CardPayment,
  ChatBot,
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
  UserInfo,
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
              <Route path='/' element={<Layout />}>
                <Route path='artdisplayer' element={<ArtDisplayer />} />
                <Route path='cardpayment' element={<CardPayment />} />
                <Route path='chatbot' element={<ChatBot />} />
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
                <Route path='userinfo' element={<UserInfo />} />
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
