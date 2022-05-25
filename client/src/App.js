import React from 'react';
import './App.css';

//Components
import Sidebar from './components/Sidebar';
import MovieSelector from './components/MovieSelector';

// Pillars of Redux :
// (Redux -> state management tool that stores the state of the application. The components can access the state from a state store.)
// Store -> object that holds the application's state tree. There should only be a single store in a Redux app, as the composition happens at the reducer level.
// Action -> plain object that represents an intention to change the state. Must have a property to indicate the type of action to be carried out.
// Reducer -> pure function that specifies how the application's state changes in response to actions sent to the store.

const App = () => {
  // const [darkMode, setDarkMode] = React.useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Header</h1>
      </header>
      <Sidebar />
      <MovieSelector />
      <footer className="App-footer">
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default App;

