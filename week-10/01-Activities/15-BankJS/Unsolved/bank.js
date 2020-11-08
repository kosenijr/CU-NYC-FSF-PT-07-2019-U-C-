// # BankJs

// ## File

// * [`bank.txt`](Unsolved/bank.txt)

// ## Instructions

// * Starting from scratch, build a Node application called `bank.js` which takes in user inputs via the command line to register bank transactions.

// * The transactions possible are:

//   * `total` - this should tally up all of the money in the bank balance and display it for the user.

//   * `deposit <number>` - this should add a positive amount to the bank balance. (No need to display the total here)

//   * `withdraw <number>` - this should add a negative amount to the bank balance. (No need to display the total here)

//   * `lotto` - this should subtract an amount from the bank balance, but if a random number is hit it should add back a larger amount into the bank balance.

// * For all deposits, withdrawals, or lotto purchases the transaction should be registered in the `bank.txt` file.

// ### Hints

// * Consider making a series of if-else or switch-case statements to identify the "type" of transaction and the "amount" involved (if relevant).

// ### Bonuses

// * If you finish early, consider finding creative ways to expand the functionality. Perhaps add a login, perhaps always provide the total, perhaps add a warning if the user tries to withdraw more than they hold, etc.

// grab file system and user input
let fs = require("fs");
// process.argv is an array
let userInput = process.argv;
// console.log(userInput);

let action = process.argv[2];
let numberInput = process.argv[3];
console.log(action, numberInput)

// create case statements for various actions and input
switch (action) {
    case "total":
        // code block
        total();
        break;
    case "deposit":
        // code block
        deposit();
        break;
    case "withdraw":
        // code block
        withdraw();
        break;
    case "lotto":
        // code block
        lotto();
        break;
    default:
        // code block
        console.log("Command not found")
}

// define a function: total
function total() {

    // read the existing bank file
    fs.readFile("bank.txt", "uft8", function(err, data) {
        if (err) {
            return console.log(err);
        }
        // break down all the numbers inside
        data = data.split(" , ")
    })
}
