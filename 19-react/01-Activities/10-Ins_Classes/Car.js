// const Vehicle = require("./Vehicle");

class Car extends Vehicle {

  constructor(model, topSpeed) {
    super(topSpeed);
    this.model = model;
    this.position = 0;
    this.id = Vehicle.genId;

    this.carDiv = document.createElement("div");
    this.carDiv.style = `left:0px; top: ${ this.id * 30 }px;width:${2* this.id *Math.random()}px; height:${2* this.id *Math.random() + 2}px; background-color:#${Math.floor(Math.random() * 1000000)}; position:absolute;`;
    
    document.body.appendChild(this.carDiv);

    this.interval = setInterval(() => {
      this.carDiv.style.left = ((this.topSpeed/100) + parseInt(this.carDiv.style.left)) + 'px';
      if (parseInt(this.carDiv.style.left) > window.innerWidth) this.carDiv.style.left = '0px';
    }, 20)
  }

  logSpeed() {
    console.log(`${this.model} is going ${this.speed}`);
  }
}
for (let i = 0; i < 100; i++){
  const ferarri = new Car("Ferrari", Math.random() * 1000);

}
console.log(ferarri)
// ferarri.logSpeed();
// ferarri.accelerate();
// ferarri.accelerate(50);
// ferarri.brake();

// function Car(model, topSpeed) {
//   Vehicle.call(this, topSpeed);
//   this.model = model;
// }

// Car.prototype = Object.create(Vehicle.prototype);

// Car.prototype.logSpeed = function() {
//   console.log(this.model + " is going " + this.speed);
// };

// var ferarri = new Car("Ferrari", 200);

// ferarri.logSpeed();
// ferarri.accelerate();
// ferarri.accelerate(50);
// ferarri.brake();
