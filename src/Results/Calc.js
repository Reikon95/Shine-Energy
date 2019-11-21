import React from 'react';
import './CalcStyle.css';
import '../Form/Form';

function Calculator({ gas, electricity }) {
    return (
        gas < 101 && electricity < 101) ?
        <div className='output'>
            Your gas bill is {normaliseCost(gas)}.<br />
            Your electricity bill is {normaliseCost(electricity)}{message}
        </div> :
        (gas < 101 && electricity > 100) ?
            <div className='output'>
                Your gas bill is {normaliseCost(gas)}. <br />Your electricity bill is {normaliseCost(complexBill(electricity))}{message}</div> :
            (gas > 100 && electricity < 101) ?
                <div className='output'>
                    <br /> Your electricity bill is {normaliseCost(electricity)}. Your gas bill is {normaliseCost(complexBill(gas))}{message}</div> :
                <div className='output'>
                    <br /> Your gas bill is {normaliseCost(complexBill(gas))}, your electricity bill is {normaliseCost(complexBill(electricity))}<br />{message}
                </div>
}





let message = ". Thank you for choosing Shine Energy!"

function normaliseCost(number) {
    return `£${number / 100}0`
}

function complexBill(number) {
    return ((number - 100) * 20) + 100;
}

function Results({ gas, electricity }) {
    return (
        <div className="box">
            {Calculator({ gas, electricity })}
        </div>
    )
}

export default Results
