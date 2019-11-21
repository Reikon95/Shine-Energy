// Calculate and display gas and electricity units used from the input meter readings 
// (Assume previous meter read was 11000. So gas units used would be `gas meter reading - 11000`)
// 3. Calculate and display bill amount in pounds for gas and electricity separately 
// (Multiply units by price per unit. First 100 units are charged at 10p per unit and the rest are charged at 20p per unit)
// ​

function Calculator(gas, electricity) {
    return (gas < 101 && electricity < 101) ? 
        `Gas bill amount is ${normaliseCost(gas)}, electricity bill is ${normaliseCost(electricity)}` :
        (gas < 101 && electricity > 100) ?
        `Gas bill amount is ${normaliseCost(gas)}, electricity is ${normaliseCost(complexBill(electricity))}` :
        (gas > 100 && electricity < 101) ?
        `Electricity bill amount is ${normaliseCost(electricity)}, gas amount is ${normaliseCost(complexBill(gas))}` :
        `Gas bill amount is ${normaliseCost(complexBill(gas))}, electricity is ${normaliseCost(complexBill(electricity))}`
}

function cleanGas(gas) {
    return 11000 - gas;
}

let fixedGas = cleanGas(gas);



function normaliseCost(number) {
    return `£${number / 100}0`
}

function complexBill(number) {
    return ((number - 100) * 20) + 100;
}

