// # Node + MySQL PopQuiz

// require statements
let mysql = require("mysql");
let inquirer = require("inquirer");

// ## Using the `terminal` or your favorite MySQL GUI
// 1. Connect to MySQL server 
let connection = mysql.createConnection({
    // create a host
    host: "localhost",

    // create a port
    port: 3306,

    // create username
    user: "root",

    // create password
    password: "password",
    database: "popquiz_db"


});

connection.connect(function(err) {
    if (err) throw err;
});

// ## Using Node / IDE of your choice
// 1. Create a package.json
// 2. Require `mysql`
// 3. Connect to MySQL
// 4. Print the 3 rows of data to the `console`




