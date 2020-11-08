// # Calculator

// ## File

// * *None*

// ## Instructions

// * Create a command-line node application that takes in parameters like this:
//   * `node calculator.js add 1 2` ... and outputs 3
//   * `node calculator.js subtract 5 2` ... and outputs 3
//   * `node calculator.js multiply 3 2` ... and outputs 6
//   * `node calculator.js divide 8 2` ... and outputs 4
//   * `node calculator.js remainder 7 2`... and outputs 1

// ### Bonuses

// * Enable your calculator application to also handle the below cases:

//   * `node calculator.js exp 7 2` ... and output 49 (7 squared)
//   * `node calculator.js algebra 4x+2=10`... and output 2. (Hint: Assume the algebra will always be in this exact form and will always be addition)

// ---------------------------------------------
// Create variables
// Log process.argv to retrieve operators
let stringAssign = process.argv;
let operator = stringAssign[2];
let num1 = stringAssign[3];
let num2 = stringAssign[4];
let output;

// set if/else statements
if (operator === "add") {
    output = parseFloat(num1) + parseFloat(num2);
} else if (operator === "subtract") {
    output = parseFloat(num1) - parseFloat(num2);
} else if (operator === "multiply") {
    output = parseFloat(num1) * parseFloat(num2);
} else if (operator === "divide") {
    output = parseFloat(num1) / parseFloat(num2);
} else if (operator === "remainder") {
    output = parseFloat(num1) % parseFloat(num2);
} else if (operator === "exp") {
    output = parseFloat(num1)  parseFloat(num2);
} else if (operator === "algebra") {
    output = "x = " + (num1.parse() - parseFloat()) / parseFloat();
}
console.log(output);