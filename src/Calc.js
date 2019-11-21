function Calculator(gas, electricity) {
    return (gas < 101 && electricity < 101) ? 
        `Gas bill amount is ${normaliseCost(gas)}, electricity bill is ${normaliseCost(electricity)}${message}` :
        (gas < 101 && electricity > 100) ?
        `Gas bill amount is ${normaliseCost(gas)}, electricity is ${normaliseCost(complexBill(electricity))}${message}` :
        (gas > 100 && electricity < 101) ?
        `Electricity bill amount is ${normaliseCost(electricity)}, gas amount is ${normaliseCost(complexBill(gas))}${message}` :
        `Gas bill amount is ${normaliseCost(complexBill(gas))}, electricity is ${normaliseCost(complexBill(electricity))}${message}`
        
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

export default Calculator