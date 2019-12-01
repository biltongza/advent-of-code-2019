const { input } = require('./input');
const { fuelCalculation, fuelCalculationWithFuelMass } = require('./lib');

describe('day 1', () => {
    describe('part 1', () => {
        it('should calculate the correct result', () => {
            const expectedResult = 3289802;
            const result = fuelCalculation(input);
            expect(result).toBe(expectedResult);
        });
    });
    describe('part 2', () => {
        it('should calculate the correct result', () => {
            const expectedResult = 4931831;
            const result = fuelCalculationWithFuelMass(input);
            expect(result).toBe(expectedResult);
        })
    })
});