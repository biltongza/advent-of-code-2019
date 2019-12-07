const { program } = require('./lib');
const { input } = require('./input');

// let's bruteforce this bitch

let result;
let noun = 0;
let verb = 0;
const wanted = 19690720;
let breakLoop = false;
while (noun <= 99) {
    while (verb <= 99) {
        console.log(`trying noun = ${noun} verb = ${verb}`);
        const iterationInput = [...input];
        iterationInput[1] = noun;
        iterationInput[2] = verb;
        result = program(iterationInput)[0];
        if (result === wanted) {
            breakLoop = true;
            break;
        }
        verb += 1;
    }
    if (breakLoop) {
        break;
    }
    noun += 1;
    verb = 0;
}

console.log(`found! noun = ${noun} verb = ${verb}`);
