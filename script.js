const Small = {
    size: "small",
    price: 50,
    calories: 20,
};

const Medium = {
    size: "medium",
    price: 75,
    calories: 30,
};

const Big = {
    size: "big",
    price: 100,
    calories: 40,
};

const cheese = {
    type: "cheese",
    price: 10,
    calories: 20,
};

const salad = {
    type: "salad",
    price: 20,
    calories: 5,
};

const potato = {
    type: "potato",
    price: 15,
    calories: 10,
};

const flavoring = {
    type: "flavoring",
    price: 15,
    calories: 0,
};

const mayo = {
    type: "mayo",
    price: 20,
    calories: 5,
};

function Hamburger(size) {

    this.price = size.price;
    this.calories = size.calories;
  
    this.getPrice = function () {
        return this.price;
    };
    this.getCalories = function () {
        return this.calories;
    };
  
    this.addModifier = function (modifier) {
        this.price += modifier.price;
        this.calories += modifier.calories;
    }
}
  
let hamburgerSmall = new Hamburger(Small);
let hamburgerMedium = new Hamburger(Medium);
let hamburgerBig = new Hamburger(Big);
  
hamburgerBig.addModifier(salad);
hamburgerBig.addModifier(cheese);

hamburgerMedium.addModifier(mayo);
hamburgerMedium.addModifier(potato);

console.log("Big sized callories with modified: " + hamburgerBig.getCalories());
console.log("Big sized price with modified: " + hamburgerBig.getPrice());  

console.log("Medium sized callories with modified: " + hamburgerMedium.getCalories());
console.log("Medium sized price with modified: " + hamburgerMedium.getPrice()); 

console.log("Small sized callories  " + hamburgerSmall.getCalories());
console.log("Small sized price: " + hamburgerSmall.getPrice()); 