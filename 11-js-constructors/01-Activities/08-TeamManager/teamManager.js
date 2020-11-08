var inq = require('inquirer');


// * Start out by creating a constructor function called "Player" with the following properties and methods...
var Player = function (nameInput, offenseInput, defenseInput) {
    // props
    this.name = nameInput;
    this.offense = offenseInput;
    this.defense = defenseInput;
    
    
}

Player.prototype.goodGame = function(){
    if(this.coinflip()){
        this.offense++;
    } else {
        this.defense++;
    };
};
Player.prototype.badGame = function(){
    if(this.coinflip()){
        this.offense--;
    } else {
        this.defense--;
    };
};
Player.prototype.coinflip = function() {
    return Math.floor( Math.random() * 2);
}

var sub =[];
var starters = [];

// recursive function 
var createPlayer = function(){
    if ( sub.length + starters.length < 3) {
        
        inq.prompt([
            {
                name: 'name',
                message: 'player name?'
            },
            {
                name: 'offense',
                type: 'rawlist',
                choices: ['1','2','3','4','5','6','7','8','9','10'],
            },
            {
                name: 'defense',
                type: 'rawlist',
                choices: ['1','2','3','4','5','6','7','8','9','10'],
            }
        ]).then(function (answers){
            if (starters.length<2){
                starters.push(new Player(answers.name,answers.offense,answers.defense ));
            } else {
                sub.push(new Player(answers.name,answers.offense,answers.defense ));
            }
            createPlayer();
        })
    } else {
        console.log('done')
    }
}
/////
// entry point:
createPlayer();

// check that we are less than the count
    // ask questions fro player arguments
    // create new player and add to array
    // if count is no done, call again, else print stats

// * Once all of the players have been created, print their stats.

// * Once your code is functioning properly, move on to create a function called "playGame" which will be run after all of the players have been created and will do the following: