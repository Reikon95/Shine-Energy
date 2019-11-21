import React, { useState, useEffect } from 'react';
import Results from './Backend/Calc.js/index.js';


function Intro() {
  let [clicked, setClicked] = useState(false)
    function handleClick() {
      setClicked(true);
    } 
    return clicked === false ? (
      <div className="Intro">
          <h1>Shine Energy</h1>
  
          {/* <img src={shine} alt="our logo"/> */}
          Please enter your gas reading:
          <input type="number" className="gas"></input>
          Please enter your electricity reading:
          <input type="number" className="electricity"></input>
          <button onClick={handleClick}>Calculate my Bill</button>
      </div>
    ) :  (
            <>
            <Results gas={10000} electricity={1000}/>
            
            </>
    )
  }

  export default Intro