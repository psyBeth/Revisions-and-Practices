//properties can be accessed with dot notation
const myCar = new Object() //object initalizer
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.color = "red"
console.log(myCar.make)
console.log(myCar.color)

//bracket notation is also possible
myCar["year"] = 1969;
console.log(myCar["model"])

myCar["Do I like?"] = "I hate my car.";
console.log(myCar["Do I like?"])

//bracket not can be used with for...in loops to iterate over all the innumerable properties of an object

function showProps(obj, objName){
    let result = ""
    for (let i in obj){
        if(obj.hasOwnProperty(i)){
            result += objName + "." + i + "=" + obj[i] + "\n";
        }
    }
    return result;
}
console.log(showProps(myCar, "myCar"));

//creation: object initalizer
let myHonda = {color: "red", wheels: 4, engine: {cylinders: 4, size: 2.2}};

//creation: constructer function
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}
let mycar = new Car("Chevy", "Malibu", 1993);
let anothercar = new Car("Mazda", "Miata", 1990);
console.log(mycar.model);

mycar.color = "black";
console.log(mycar.color);

//creation: object.create
let Animal = {
    type: "Invertebrates",
    displayType: function(){
        console.log(this.type);
    }
}
let animal1 = Object.create(Animal);
animal1.displayType();

let fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType();