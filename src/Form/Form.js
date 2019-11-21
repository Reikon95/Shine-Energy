import React from 'react';
import './Form.css';


export default function Form(props) {

    // props = {
    //     userId : 12,
    //     currentGas: 11000,
    //     currentElectricity: 0
    // }

    return (
        <>


            <form className="inputForm">

                <label for="gas" className="inputItem">Please enter your gas reading:</label>
                <input type="number" className="inputItem inputBox" placeholder="00000" />

                <label for="electricity" className="inputItem">Please enter your electricity reading:</label>
                <input type="number" className="inputItem inputBox" placeholder="00000" />
                <input type="submit" value="Calculate my bill" className="inputItem" id="submitButton" />
            </form>

        </>
    )
}