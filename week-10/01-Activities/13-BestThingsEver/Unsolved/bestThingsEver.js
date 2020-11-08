// fs is a core Node package for reading and writing files
// require is a js method that receives strings and imports a node package, then use it
var fs = require("fs");

// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
// readFile is a method of the file system (fs)
// function(error, data) is called an "error-first callback"
fs.readFile("best_things_ever.txt", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  // if statement is "if (error !== null)"
  if (error) {
    return console.log(error);
  }

  // We will then print the contents of data
  console.log(data);

  // Then split it by commas (to make it more readable)
  var output = data.split(",");

  // We will then re-display the content as an array for later use.
  console.log(output);

//   List all indices
console.log(output[0]);
console.log(output[1]);
console.log(output[2]);
console.log(output[3]);
console.log(output[4]);
console.log(output[5]);
console.log(output[6]);
});
