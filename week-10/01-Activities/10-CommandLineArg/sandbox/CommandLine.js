import { builtinModules } from "module";

// # Command Line Arg

// ## File

// * *None*

// ## Instructions

// * Starting from a blank JavaScript file, create a Node application that takes in two command line arguments and checks if they are equal. If the two numbers are equal then output: "true". Otherwise output: "false".

// ### Hints

// * `console.log(process.argv)` as a starting point if you are completely lost.

// ### Bonuses

// * Check if the two numbers are both multiples of 7. Again output "true" if they are and output "false" if they are not.
console.log(process.argv)
let x = process.argv[2];
let y = process.argv[3];
console.log(x);
console.log(y);


if (x === y) {
    return true;
    console.log("true");
} else {
    console.log("false")
}

// Bonus
// Check through node to see the array
console.log(process.argv);

if (x % 7  === 0 && y % 7 === 0) {
    return true;
    console.log("true");
} else {
    console.log("false");
}

// Note: make value inclusive of a node array by stating it after .js file: node checkAfter.js 3 4.

