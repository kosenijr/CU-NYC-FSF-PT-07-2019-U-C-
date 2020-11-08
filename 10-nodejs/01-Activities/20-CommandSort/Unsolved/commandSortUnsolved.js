// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

var inputArray = [];

// get args into array
for(i =2; i < process.argv.length; i++){
    // add to input array
    inputArray.push(parseFloat(process.argv[i]));
}
console.log(inputArray);

// sort the array
inputArray.sort(function(a,b) {return b - a});
console.log('sorted array: ', inputArray);
