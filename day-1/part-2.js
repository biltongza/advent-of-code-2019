const { input } = require('./input');
const { fuelCalculationWithFuelMass } = require('./lib');

const result = fuelCalculationWithFuelMass(input);

console.log(result);