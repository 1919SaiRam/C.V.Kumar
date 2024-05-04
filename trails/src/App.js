import React from 'react';
import logo from './logo.svg'; // Import the logo image
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="box-container">
          <div className="box" >
              <img src={logo} className="App-logo" alt="logo" />
             </div>
          <div className="box">
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
