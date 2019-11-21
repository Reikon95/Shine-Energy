import React, { useState, useEffect } from 'react';
import Results from './Calc.js'
import shine from './energy.svg';
function Intro() {
  let [clicked, setClicked] = useState(false)
    function handleClick() {
      setClicked(true);
    } 
    return clicked === false ? (
      <div className="Intro">
          <h1>Shine Energy</h1>
  
          <img src={shine} alt="our logo"/>
          Please enter your gas reading:
          <input type="number" className="gas"></input>
          Please enter your electricity reading:
          <input type="number" className="electricity"></input>
          <button onClick={handleClick}>Calculate my Bill</button>
      </div>
    ) :  (
            <>
            <Results gas={10} electricity={10}/>
            
            </>
    )
  }

  export default Intro