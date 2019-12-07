const { program } = require('./lib');
const {input} = require('./input');

input[1] = 12;
input[2] = 2;
const result = program(input);
console.log(result[0]);
