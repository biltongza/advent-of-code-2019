const fuelCostFunc = (moduleMass) => Math.floor(moduleMass / 3) - 2;

function fuelCalculation(input) {
    return input.reduce((sum, current) => (sum += fuelCostFunc(current)), 0);
}

function fuelCalculationWithFuelMass(input) {
    return input.reduce((sum, current) => {
        let fuelCost = fuelCostFunc(current);
        while(fuelCost > 0) {
            sum += fuelCost;
            fuelCost = fuelCostFunc(fuelCost);
        }
        return sum;
    }, 0);
}

module.exports = {
    fuelCalculation,
    fuelCalculationWithFuelMass,
};