// ES6 


class Pokemon {
  constructor(name){
    this.name = name;
    this.isSleepy = true;
    this.isHungry = false;
  }
  sayName () {
    console.log(`${this.name}!`);
  };
  eat () {
    if (this.isHungry) {
      this.isHungry = false;
      this.isSleepy = true;
      console.log(
        `${this.name} just finished eating, ${this.name} is sleepy now.`
      );
    } else {
      console.log(
        `${this.name} isn't hungry. ${this.name} is sleepy though.`
      );
    }
  };
  sleep () {
    if (this.isSleepy) {
      this.isSleepy = false;
      this.isHungry = true;
      console.log(`${this.name} went to sleep...`);
      console.log(`${this.name} woke up refreshed! And hungry!`);
    } else {
      console.log(
        `${this.name} isn't sleepy. ${this.name} is hungry though.`
      );
    }
  };
}

var snorlax = new Pokemon("Snorlax");

snorlax.sayName();

snorlax.sleep();
snorlax.eat();
