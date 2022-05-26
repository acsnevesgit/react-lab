import React from 'react';
import './App.css';
import Switch from '@mui/material/Switch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Layout from './pages/Layout';
import CardPayment from './pages/CardPayment';

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

