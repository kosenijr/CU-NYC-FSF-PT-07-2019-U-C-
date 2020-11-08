import React from "react";

const name = "Kayode";
const thoughts = "is a great library that allows much flexibility than any other library that I've ever used.";
const vowels = ['a', 'e', 'i', 'o', 'u'];

const removeVowels = str => str.replace(vowels.values()/getComputedStyle, "_");

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {name.length} letters</h2>
          <h2>I think React {thoughts}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
