// # **Instructions**

// * Over the course of this activity you are going to be using constructors to create simplistic characters for use within a very basic Roleplaying Game (RPG)

// * Each character created using your constructor should have the following properties...

//   * Name: The character's name --> String

//   * Profession: What the character does for a living --> String

//   * Gender: The character's gender --> String

//   * Age: The character's age --> Integer

//   * Strength: Abstraction for how strong the character is --> Integer

//   * HitPoints (HP): Abstraction for how much health the character has --> Integer

//   * and has a method, PrintStats: Function which prints all of a character's properties to the screen
function Character(inputName, inputProfession, inputGender, inputAge, _strength, _hitPoints) {
    this.name = inputName;
    this.profession = inputProfession;
    this.gender = inputGender;
    this.age = inputAge;
    this.strength = _strength;
    this.hitPoints = _hitPoints;
    this.printStats = function () {
        console.log(this.name , this.profession, this.gender, this.age, this.strength, this.hitPoints);
    };
    this.isAlive = function() {
        if(this.hitPoints > 0) {
            console.log(this.name, 'is alive');
        } else {
            console.log('game over your dead!');
        }
    };
    this.attack = function( char ) { 
        char.hitPoints = char.hitPoints - this.strength;
        console.log('other char has', char.hitPoints);
        char.isAlive();
    };
    //   * LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25
    this.levelUp = function(){
        this.age = this.age + 1;
        this.strength += 5;
        this.hitPoints += 25;

    }
}

var char1 = new Character('ron', 'developer', 'positive', 16, 5, 15);
var char2 = new Character('John', 'developer', 'positive', 17, 5, 20);


//   * Once you have created your constructor, create two new characters and print their properties to the screen
char1.printStats();
char2.printStats();

//   * Fool around and get comfortable with your constructor before moving onto the next parts of the activity

// * Now that you feel comfortable with your constructor, it is time to start making this character creation system a little more reactive by adding in some more methods...

//   * IsAlive: Function which prints whether or not this character is alive by looking into their hitpoints and determining whether they are above or below zero.
char2.isAlive();
//   * Attack: Function which takes in a second character's hitpoints and subtracts this character's strength from it.
char1.attack(char2);
//   * LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.
console.log('\n\n ---- level up ----');
char2.printStats();
char2.levelUp();
char2.printStats();
// * BONUS: After completing the previous sections and making sure they work, you now have everything you need to create a very basic RPG where two characters fight one another. Don't worry if you cannot finish this part of the activity as, by completing the above sections you are well on your way to mastering constructors!
console.log('\n\n\n --- game on! ---');
char1.attack(char2);
char2.attack(char1);
char1.attack(char1);
char1.attack(char2);
char1.attack(char2);
char2.attack(char1);
char2.attack(char1);
char2.attack(char1);



