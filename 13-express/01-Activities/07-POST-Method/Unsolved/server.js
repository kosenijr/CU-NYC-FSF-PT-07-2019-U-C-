// Dependencies
var http = require("http");
var fs = require("fs");

var PORT = 9000;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  var path = req.url;

  switch (path) {
  case "/":
    return postThis (req, res);
  default:
    return welcomeThis (req, res);
  }
}

function postThis (req, res) {
  fs.readFile(__dirname + "/index.html", function(err, data) {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>");
    }
    else {
      // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
      // an html file.
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
}

function welcomeThis (req, res) {
  // Saving the request posted data as a variable.
  var dataRequested = "";

  var myHTML =
    "<html><head><title>Hello Noder!</title></head><body><h1>Oops, I didn't get any data</h1></body></html>";

  // When the server receives data, it will add it to dataRequested.
  req.on("data", function(data) {
    dataRequested += data;
  });

  // When the request has ended...
  req.on("end", function() {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end();
    console.log(dataRequested);
  });
}

// Starts our server.
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
