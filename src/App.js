// src/App.js
import React from 'react';
import Main from './Components/Main/Main';
import StudentContextProvider from './context/StudentContextProvider';
import './App.css';

function App() {
  return (
    <div className="App">
      <StudentContextProvider>
        <Main />
      </StudentContextProvider>
    </div>
  );
}

export default App;
