console.log(process.argv);

// console.log('--the command--');
// console.log(process.argv[2]);

// console.log('--everything else--');
// console.log(process.argv.slice(3).join(' '));
obj = {
    firstKey: 'value1',
    secondKey: 'value2',
    thirdKey: 'value3',
}
var [ , , command, ...all] = process.argv;
console.log('command: ', command);
console.log('all: ', all.join(' '));

var {firstKey,secondKey, thirdKey} = obj;
console.log('firstKey: ', firstKey);
console.log('secondKey: ', secondKey);
console.log('thirdKey: ', thirdKey);
