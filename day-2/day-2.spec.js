const { program } = require('./lib');

describe('day 2', () => {
    it('test case 1', () => {
        const input = [1,0,0,0,99];
        const result = program(input);
        expect(result[0]).toBe(2);
    });

    it('test case 2', () => {
        const input = [2,3,0,3,99];
        const result = program(input);
        expect(result[3]).toBe(6);
    });

    it('test case 3', () => {
        const input = [2,4,4,5,99,0];
        const result = program(input);
        expect(result[5]).toBe(9801);
    });

    it('test case 4', () => {
        const input = [1,1,1,4,99,5,6,0,99];
        const result = program(input);
        expect(result[0]).toBe(30);
    });
});