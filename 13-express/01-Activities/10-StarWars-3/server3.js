// Dependencies
// ===========================================================
let express = require("express");

let app = express();
let PORT = 3000;

// Data
// ===========================================================
var characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}, {
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}, {
  routeName: "obiwankenobi",
  name: "Obi Wan Kenobi",
  role: "Jedi Master",
  age: 55,
  forcePoints: 1350
}];

// Routes
// ===========================================================

app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

// What does this route do?
// This route displays the entire array via PORT
app.get("/api/characters", function(req, res) {
  return res.json(characters);
});

// What does this route do?
// This takes in a particular character and provides all parameters of that index.
app.get("/api/characters/:character", function(req, res) {
  // What does this code do?
  // This code requests the parameters of a character after the "/".
  var chosen = req.params.character;
  console.log(chosen);


  // What does this code do?
  // This for-loop cycles through the indices w/in the characters array
  for (var i = 0; i < characters.length; i++) {
    // if chosen matches a routename w/in the characters array, the function will return all parameters of a character
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  // What does this code do?
  // Since this return is outside of the function, it acts as an "else" by returning "No character found" if chosen does not match a routename in the characters array
  return res.send("No character found");
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
