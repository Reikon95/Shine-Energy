import React, { useState } from 'react';
import './Form.css';
import Results from '../Results/Calc';

export default function Form(props) {

    let [clicked, setClicked] = useState(false)
    let [gasVal, setGasVal] = useState(0);
    let [leccyVal, setLeccyVal] = useState(0);

    function handleClick() {
        setClicked(true);
    }

    function handleGasChange(e) {
        setGasVal(e.target.value)
    }

    function handleLeccyChange(e) {
        setLeccyVal(e.target.value)
    }

    return clicked === false ? (
        <>
            <form className="inputForm">

                <label for="gas" className="inputItem">Please enter your gas reading:</label>
                <input type="number" className="inputItem inputBox gas" placeholder="00000" onChange={event => handleLeccyChange(event)} />

                <label for="electricity" className="inputItem">Please enter your electricity reading:</label>
                <input type="number" className="inputItem inputBox electricity" placeholder="00000" onChange={event => handleGasChange(event)} />
                <button
                    onClick={handleClick}
                    value="Calculate my bill"
                    className="inputItem"
                    id="submitButton">
                    <h2>Calculate my bill</h2></button>
            </form>

        </>) : (
            <>
                <Results gas={gasVal - 11000} electricity={leccyVal} />
            </>
        )
}