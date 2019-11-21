import React, { useState, useEffect } from 'react';
import Calculator from './Calc.js'
import shine from './energy.svg';
function Intro() {
    let [clicked, setClicked] = useState(false);
    function handleClick() {
        setClicked(true);
    }
    return !clicked? (
      <div className="Intro">
          <h1>Shine Energy</h1>
  
          <img src={shine} alt="our logo"/>
          Please enter your gas reading:
          <input type="text"></input>
          Please enter your electricity reading:
          <input type="text"></input>
          <button onClick={handleClick()}>Calculate my Bill</button>
      </div>
    ) :  (
            <Calculator/>
    )
  }

  export default Intro