// Write a function that receives an array of a function and returns the array after it ran the fn on every element.

let numbers = [4, 9, 12, 17];

function myFunction() {
    x = numbers.values();
    let newArray = numbers.filter(function(e){x-2});
    console.log(newArray)
}