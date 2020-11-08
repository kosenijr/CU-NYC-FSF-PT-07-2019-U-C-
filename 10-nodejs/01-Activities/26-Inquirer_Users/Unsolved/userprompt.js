// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

//import inquere package
var inquirer = require('inquirer');

// create questions
inquirer
    .prompt([
        {
            type: 'input',
            message: 'who doesnt want to help Ron?',
            name: 'noHelp'
        },
        {
            type: 'checkbox',
            message: 'what is your context?',
            name: 'context',
            choices: ['this', 'that', 'other']
        }
    ])
    .then(function(response){
        console.log(response);
    })

// check password


// show stuff