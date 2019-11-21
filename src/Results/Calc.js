import React from 'react';
import './CalcStyle.css';
import '../Form/Form';

function Calculator({ gas, electricity }) {
    return (cleanGas(gas) < 101 && electricity < 101) ?
        <h2>Your gas bill is {normaliseCost(gas)}. Your electricity bill is {normaliseCost(electricity)}{message}</h2> :
        (cleanGas(gas) < 101 && electricity > 100) ?
            <h2>Your gas bill is {normaliseCost(gas)}. Your electricity bill is {normaliseCost(complexBill(electricity))}{message}</h2> :
            (cleanGas(gas) > 100 && electricity < 101) ?
                <h2>Your electricity bill is {normaliseCost(electricity)}. Your gas bill is {normaliseCost(complexBill(gas))}{message}</h2> :
                <h2>Your gas bill is {normaliseCost(complexBill(gas))}, your electricity bill is {normaliseCost(complexBill(electricity))}{message}</h2>
}

function cleanGas(gas) {
    return 11000 - gas;
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
