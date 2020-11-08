// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

// get the command from argv
var command = process.argv[2];
var searchTerm = process.argv.slice(3).join(' ');

var actorSearch = function(term) {
    console.log('searching actor', term);

    // call api

    // log results and search to file

    // /console.log result
}
var showSearch = function(term) {
    console.log('searching show', term);
}

console.log(command);
// check which command
    switch (command) {
        case 'actor':
            actorSearch(searchTerm);
            break;
        case 'show':
            showSearch (searchTerm);
            break;
        default:
            console.log('command not found');
    }
