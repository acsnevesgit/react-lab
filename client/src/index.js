import React, { Suspense } from 'react'; // component to prevent rendering until the request is complete
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Suspense fallback='loading'>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>
);
