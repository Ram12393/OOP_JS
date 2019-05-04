// *************************************cunstructor creation
//cunstructor is a object, which will intialize and setting up the values
let Person = function (_name, _location) {
    // this.name=name;
    // this.location=location;
    // return name, location // this will return name and location values
    this.setName = function (name) { //setter
        _name = name
    }
    this.getName = function () { //getter
        return _name
    }
}

let pereson = new Person('ram', 'bangalore');
pereson.setName('padmavathi');
console.log(pereson.getName());


// *************************************prototype creation
//every constructor has a prototyperty, so that you can add methods to it
let Player = function (name, matches, runs) {
    this.name = name;
    this.matches = matches
    this.runs = runs

}
Player.prototype.strickRate = function () {
    return this.runs / this.matches;
}
let player = new Player('viru', 6000, 300);
console.log(player);

// *************************************prototype inheritance
let tempObj = {} //empty object literal
console.dir(tempObj);
let tempObj1 = Object.create({}); // using master object,create object
console.dir(tempObj1)

let Lap = function (brand) {
    this.brand = brand
}

Lap.prototype.getBrand = function () {
    return this.brand;
}

let tempLap = new Lap('Dell');
let tempLap1 = Object.create(tempLap) //here you are inheriting BRAND name and Getbrand method
console.dir(tempLap);
console.dir(tempLap1);
console.log(tempLap1 instanceof Lap); // this is will return TRUE, we are inheriting the properties from Lap Cunstructor

// *************************************prototype chaining
let Car = function () {

}
Car.prototype.print = function () {
    return "I'm a car"
}
// Car.prototype ={
//     print(){
//         return "I'm a car"
//     }
// }
let ToyCar = function () {

}
ToyCar.prototype = Object.create(Car.prototype)

ToyCar.prototype.print = function () {
    return "I'm a Toy Car"
}
let CarTransformer = function () {

}
CarTransformer.prototype = Object.create(ToyCar.prototype);
CarTransformer.prototype.print = function () {
    return "I'm a Car Transformer"
}
let tayota = new Car();
let hundai = new ToyCar();
let skoda = new CarTransformer();
// console.log(tayota.print());
// console.log(hundai.print());
console.log(skoda); // it will give prototype chain 
console.log(skoda instanceof Car);


// *************************************constructor extending
let Vehical = function (name) {
    this.name = name
}
Vehical.prototype = {
    petrol() {
        return "it runs with petrol"
    },
    diesel() {
        return "it runs with diesel"
    }
}

let VehicalCondition = function (name, condition) {
    Vehical.call(this, name)
    this.condition = condition
}

VehicalCondition.prototype = Object.create(Vehical.prototype)
VehicalCondition.prototype.constructor = VehicalCondition
console.dir(VehicalCondition)

// *************************************Object.setPropertyOf() ((extending Object method Literals)

let motorBike = {
    name: "Hero Honda",
    ride() {
        return "I'm riding Hero Honda Bike"
    }
}
let bicycle = {
    cycling() {
        return "I will do cycling morning times"
    }
}

Object.setPrototypeOf(bicycle, motorBike)
console.log(bicycle.ride()); // here we are calling motorBike method

// *************************************Object.assign() ((extending Object method Literals)

let eat = {
    rice() {
        return 'Eating Rice';
    },
    nuts() {
        return "Eating Nuts"
    }
}

let vegitable = {
    veg() {
        return "eating vegitable"
    }
}
Object.assign(vegitable, eat);
console.log(vegitable.rice());
let copyEat = Object.assign({}, eat)
console.log(copyEat);

// *************************************function MIXINS

//object mixins
let jsSkill = {
    knowsJS() {
        return true;
    }
}
let engDegree = {
    hasDegree() {
        return true;
    }
}

let backendSkill = {
    knowsBackend() {
        return true
    }
}
let jsEng = Object.assign({}, jsSkill, engDegree);
let fullstackEngineer = Object.assign({}, jsEng, backendSkill)
console.log(jsEng);
console.log(fullstackEngineer.hasDegree());
console.log(fullstackEngineer.knowsJS());
console.log(fullstackEngineer.knowsBackend());

//Factory functions

let Preparing = function (item) {
    let isPreparing = false
    return Object.assign({}, {
        item: item,
        checkPreparing() {
            isPreparing = true;
            return this
        },
        Prepared() {
            return isPreparing
        }
    })
}

let preparing = Preparing("IDLI")
console.log(preparing.checkPreparing().Prepared());

// function mixins

let humanFactory = function (obj) {
    let isCry = false;
    return Object.assign({}, obj, {
        cry() {
            isCry = true;
            return this
        },
        isCrying() {
            return isCry;
        }
    })
}

let flyFactory = function(obj){
    let isFly = false;
    return Object.assign({},obj,{
        fly(){
            isFly = true;
            return this
        },
        isFlying(){
            return isFly;
        }
    })
}

let superman = humanFactory(flyFactory({}))
console.dir(superman);
console.log(superman.fly().cry().isCrying());

// ************************************* Classes    
// class are nothing but function
class Gadgets{
    constructor (mobile){
        this.mobile= mobile;
    }
    laptop(){
        return "this is laptop";
    }
}
console.log(typeof(Gadgets)); //it return function
let chesdfsf = new Gadgets('mi')
console.log(chesdfsf.laptop()); // it would return "this is laptop"


// ************************************* Sub Classes    

class Chair{
    constructor(name,cost){
        // this.name = name;
        // this.cost = cost;
        Object.assign(this,name,cost)
    }
    chairDetails(){
        return `${this.name} it has cost of ${this.cost}`
    }
}

class Owner extends Chair{
    constructor(name,designation){
        super(name);
        this.designation = designation
        this.cost = 25445;
    }
    ownerDetails(){
        return `${this.name} , he/her is  doing ${this.designation} `
    }
}
let owner = new Owner('ram',"Job");
console.log(owner.ownerDetails());
console.log(owner.chairDetails());

// ************************************* Decorator
let lipstick = function(target){
target.lips = 'pink'
}
// @boy
// class Girl{ // you nee change interpriller

// }
console.log(`her lips are ${Girl.lips}`);

class Student{
    constructor(name,branch){
        this.name = name;
        this.branch = branch;
    }
    displayStudentDetails(){
        console.log(`student name is ${this.name} and he is studying ${this.branch}`);
    }
    displayStudentName(){
        return this.name
    }
}

class Parent extends Student{
    constructor(p_name,mobile,name,branch){
        super(name,branch);
        this.p_name = p_name;
        this.mobile= mobile;
    }
    displayParentChild(){
        console.log(`parent name is ${this.p_name} and their child is ${super.displayStudentName()}`);
    }
}

Student.prototype.marks =function(m1){
    console.log(`student ${this.name} got ${m1} marks `);
}
const parent = new Parent('Krishnamurthy', '9553438342','ram','MCA');
parent.displayParentChild();
parent.displayStudentDetails()
parent.marks(25)







