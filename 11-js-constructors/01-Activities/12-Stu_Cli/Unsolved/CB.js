var fs = require('fs');

var func = function(){
    console.log('callback func was called');
}

var demonstratingCB = function ( printOrNot, cb ) {
    if (printOrNot === true) {
        cb();
    }
}

demonstratingCB(true, func);

fs.appendFile('text', 'whatever', errorHandeling)

function errorHandeling(err) {
    if(err) {
        console.log(err)
    }
    console.log('done')
}