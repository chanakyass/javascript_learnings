/*
Every javascript object will have point to a prototype object called which you can access as [object_name].__proto__ or [constructor_name].prototype
All objects of a constructor will share the same prototype and hence adding properties to prototype will be more memory efficient.

Prototype chaining - Each object in javascript will be poining to its prototype and each prototype will point to its own prototype until the prototype of object is null.
*/

//Assigning properties to object prototype

function Bike(name, model, color) {
    this.name = name;
    this.model = model;
    this.color = color;
}

Bike.prototype.getBikeDetails = function () {
    return "Bike details " + this.name + " " + this.model + " " + this.color;
}

Bike.prototype.getBikeDetails2 = () => {
  return "Bike details " + this.name + " " + this.model + " " + this.color;
};

var bike = new Bike("TVS", "XYZ", "Black");

console.log(bike.getBikeDetails());

console.log(bike.getBikeDetails2());


var x = bike;

//Chain of prototypes. Until inheritance level reaches that of object
while (x.__proto__ !== null) {
    console.log(x);
    x = x.__proto__;
}



/*

Note that bike.getBikeDetails2() wont work and properties will be undefined

This is because arrow functions provide a lexical this meaning a this when function is being evaluated. So when you call bike.getDetails()

*/