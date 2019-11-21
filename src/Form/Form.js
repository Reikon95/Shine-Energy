import React, { useState } from 'react';
import './Form.css';
import Results from '../Results/Calc';
import monkey from './sadMonkey.jpg';
import Welcome from '../Welcome/Welcome';

export default function Form(props) {

    let [clicked, setClicked] = useState(false)
    let [gasVal, setGasVal] = useState(0);
    let [leccyVal, setLeccyVal] = useState(0);

    function handleClick() {
        setClicked(true);
    }

    function handleGasChange(e) {
        setGasVal(e.target.value);

    }

    function handleLeccyChange(e) {
        setLeccyVal(e.target.value)
    }

    return clicked === false ? (
        <>
            <Welcome userName={'Graham'} />

            <form className="inputForm">

                <label for="gas" className="inputItem">Please enter your gas reading:</label>
                <input type="number" className="inputItem inputBox gas" placeholder="10000" onChange={event => handleLeccyChange(event)} />

                <label for="electricity" className="inputItem">Please enter your electricity reading:</label>
                <input type="number" className="inputItem inputBox electricity" placeholder="10000" onChange={event => handleGasChange(event)} />
                <button onClick={handleClick} id="submitButton">
                    <h2>Calculate my bill</h2>
                </button>
            </form>

        </>) :
        gasVal >= 11000 || leccyVal >= 11000 ? (
            <>
                <Results gas={gasVal} electricity={leccyVal} />
            </>
        ) : <>
                <h1>Sorry, please try again</h1>
                <img src={monkey} alt="sadMonkey" id="monkey" />


            </>
}