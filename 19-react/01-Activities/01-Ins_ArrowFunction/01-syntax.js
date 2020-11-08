// All of the `createGreeting` functions are equivalent
var createGreeting = (message, name) => {
  return message + ", " + name + "!";
};

// We can safely swap out function expressions with arrow functions most of the time
var createGreeting = (message, name) =>  message + ", " + name + "!";

// If the arrow function body contains only one expression, we can omit the curly braces and auto return it
var createGreeting = (message, name) => message + ", " + name + "!";

// Logs "Hello, Angie!";
greet(greeting);
