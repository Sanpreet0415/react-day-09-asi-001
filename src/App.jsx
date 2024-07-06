// App.jsx

import React, { useReducer } from 'react';
import './App.css'; // Import your CSS file for styling

// Initial state
const initialState = {
  theme: 'light' // Default theme is light
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={`App ${state.theme}`}>
      <h1>Theme Toggle Example</h1>
      <p>Current Theme: {state.theme}</p>
      <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
        Toggle Theme
      </button>
    </div>
  );
};

export default App;
