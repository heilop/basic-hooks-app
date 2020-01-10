import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Seconds from './Hooks/Seconds';

function App() {

  const [ showTimer, setShowTimer ] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Hooks</h1>
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick = { () => setShowTimer(!showTimer) }>
          {
            !showTimer
            ? 'Enable timer'
            : 'Disable timer'
          }
        </button>
        {
          !showTimer
          ? (
            <div className="alert alert-danger">
              Off
            </div>
          )
          : (
            <div className="alert alert-success">
                On! <Seconds/> seconds
            </div>
          )
        }
      </header>
    </div>
  );
}

export default App;
