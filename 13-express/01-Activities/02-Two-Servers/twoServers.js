
// # **Instructions**
// * Using the previous example as a guide, create an app that has two web servers: one that listens on port 7000 and one that listens on port 7500.
// * Each server will respond with a different inspirational quote of your choosing.
// **Bonus**
// * Randomly select the quotes from a predefined array.


// ===================================================================
// Require the http module
let http = require("http");

// create variables for various quotes
let a = "Be peaceful, be courteous, obey the law, respect everyone... .";
let b = "Nobody can give you freedom. ... If you're a man, you take it.";
let c = "If you have no critics you'll likely have no success.";
let d = "We didn't land on Plymouth Rock, my brothers and sisters — Plymouth Rock landed on us.";
let e = "Stumbling is not falling.";
let f = "If you're not careful, the newspapers will have you hating the people who are being oppressed, and loving the people who are doing the oppressing.";
let g = "I'm for truth, no matter who tells it. I'm for justice, no matter who it's for or against.";

// create an array w/ quotes
let quotableQuotes = [a, b, c, d, e, f, g];

// create a random assortment
x = Math.floor(Math.random() * 7);
// console.log(x);
let setQuotes = quotableQuotes[x];
console.log(setQuotes);

// Define two ports for listening to upcoming requests
let P1RT = 7000;
let P2RT = 7500;


// create two servers using const variables
const server1 = http.createServer(sendThis);
const server2 = http.createServer(sendThat);


//Start our server so that it can begin listening to client requests.
server1.listen(P1RT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + P1RT);
});

//Start our server so that it can begin listening to client requests.
server2.listen(P2RT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + P2RT);
});

// create function(s) to handle requests/responses
// sendThis
function sendThis(request, response) {
    // send the below string to client when the user visits the PORTS' URL
    response.end(setQuotes);
};
// sendThat
function sendThat(request, response) {
    // send the below string to client when the user visits the PORTS' URL
    response.end(setQuotes);
};