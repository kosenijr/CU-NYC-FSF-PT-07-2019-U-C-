// # **Instructions**
// * Create a website with four routes:
//   * Home
//   * Favorite Foods
//   * Favorite Movies
//   * Favorite CSS Frameworks
// * Each route should be triggered by a different URL.
// * Each route should display an HTML page listing your favorite three things of each.
// * Be sure to use `fs` to serve your HTML files.

// ## Bonuses
// * Have your home page have links to all of your other pages.
// * DRY up your code by only having a single `readFile`

// ===================================================================

// require dependencies:
// http
let http = require("http");
// fs
let fs = require("fs");

// set port
let PORT = 8080;

// create a server
let server = http.createServer(handleReq);

// create a function for handling the requests and responses coming into the server
function handleReq(req, res) {

    // create a variable for url pathway
    let path = req.url;

    // create a switch statement for various URLs
    switch (path) {
        // cases w/ no return will defer to nearest return
        case "/ffood":
        case "/fmovie":
        case "/fcss":
            return renderHTML(path + ".html", res);
        default:
            return renderHTML("/index.html", res);
    }
}

function renderHTML(filePath, res) {
    return fs.readFile(__dirname + filePath, function (err, data) {
        if (err) throw err;
        // signifies that I am adding features to the "head" of html page
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data)
    })
}

// Usually the last step
// start server
server.listen(PORT, function () {
    // confirm listening feature
    console.log("Server listening on: http://localhost:" + PORT);
});


