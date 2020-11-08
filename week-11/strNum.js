// Write a function that takes a string and if it is a number, return its negative, if not throw an exception

function strNum (str) {
    let input = parseFloat(str);
    if (is NaN(input)) {
        throw "Not a number";
    } else {
        return (input)
    }
}
