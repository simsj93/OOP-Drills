let person1 = {
    name: 'Tyler',
    greeting: function () {
        console.log(`Hello, my name is ${this.name}`)
    } 
};


let person2 = {
    name: 'Jake B',
    greeting: function () {
        console.log(`Hello, my name is ${this.name}`)
    }
}; 

let person3 = {
    name: 'Jake E',
    greeting: function () {
        console.log(`Hello, my name is ${this.name}`)
    }
}; 

let person4 = {
    name: 'Caleb',
    greeting: function () {
        console.log(`Hello, my name is ${this.name}`)
    }
}; 

let person5 = {
    name: 'Cebastian',
    greeting: function () {
        console.log(`Hello, my name is ${this.name}`); 
    }
}; 

function Person (name, city, age) {
      this.name = name; 
      this.city = city; 
      this.age = age; 
}

Person.prototype.greeting = function () {
    console.log(`Hey, my name is ${this.name}, I am ${this.age} years old and live in ${this.city}.`); 
}

let person1 = new Person('Tyler','Birmingham', 26); 
let person2 = new Person('Jake B', 'Alabaster', 26); 
let person3 = new Person('Jake E', 'Birmingham', 27); 
let person4 = new Person ('Caleb', 'Austin', 24); 
let person5 = new Person ('Cebastian', 'Tokyo Prefecture', 24); 

person5.greeting(); 

class Person {
    constructor (name, city, age){
        this.name = name; 
        this.city = city; 
        this.age = age; 
    }

    greeting () {
        console.log(`hello, my name is ${this.name}, my age is ${this.age} and I live in ${this.city}.`)
    }
}


let person1 = new Person('Tyler','Birmingham', 26); 
let person2 = new Person('Jake B', 'Alabaster', 26); 
let person3 = new Person('Jake E', 'Birmingham', 27);
let person4 = new Person ('Caleb', 'Austin', 24); 
let person5 = new Person ('Cebastian', 'Tokyo Prefecture', 24); 

person5.greeting(); 

class Vehicle {
    constructor (manufacturer, numOfWheels) {
        this.manufacturer = manufacturer; 
        this.numOfWheels = numOfWheels; 
    }
    aboutVehicle () {
        console.log(`this vehicle is made by ${this.manufacturer} and has ${this.numOfWheels} wheels.`)
    }
}

class Truck extends Vehicle {
    constructor (manufacturer, numOfWheels, numOfDoors, hasTruckBed) {
        super(manufacturer, numOfWheels);
        this.numofDoors = numOfDoors; 
        this.hasTruckBed = hasTruckBed;  
    }
}

class Sedan extends Vehicle {
    constructor (manufacturer, numOfWheels, size, mpg) {
        super(manufacturer, numOfWheels); 
        this.size = size; 
        this.mpg = mpg; 

    }
}

class Motorcycle extends Vehicle {
    constructor (manufacturer, numOfWheels, hasHandleBars, hasDoors) {
        super(manufacturer, numOfWheels); 
        this.hasHandleBars = hasHandleBars; 
        this.hasDoors = hasDoors; 
    }
}

let hondaCivic = new Sedan('Honda', 4, 'small', '24mpg'); 

hondaCivic.aboutVehicle(); 