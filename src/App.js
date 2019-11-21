import React from 'react';
import './App.css';
import shine from './energy.svg';
import Calculator from './Calc.js'

function App() {
  return (
    <div className="App">
        <h1>Shine Energy</h1>

        <img src={shine} alt="our logo"/>
        Please enter your gas reading:
        <input type="text"></input>
        Please enter your electricity reading:
        <input type="text"></input>
        <button>Calculate my Bill</button>
    </div>
  );
}

export default App;
