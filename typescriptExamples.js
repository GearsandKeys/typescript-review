//Advantages include scalability, more errors caught before deployment, JS works in TS
// General static format is:
// let variableName: type = value;
// Number
var numberVariable = 10;
// String
var stringVariable = "10";
// Boolean
var boolVariable = true;
// ARRAYS
// Number Array
var arrayOfNums = [10, 9, 8];
// String Array
var arrayOfStrings = ["salt", "pepper", "bread", "eggs"];
// tuple: A special structure that allows values of different types
var tupleName;
tupleName = [10, "9", 8];
// A good example might be an element or a car model
var car1;
car1 = ["Ford", "Mustang", 2020];
// FUNCTIONS
// We provide the type of the params, and the type of the return
function myFunction(x) {
    return x * 2;
}
// If a function has no return we use void, just like C#
var y = 0;
function mySecondFunction(x) {
    y = x * 2;
    console.log(" Y is " + y);
}
// Anonymous Functions
// Still need to return the parameter and return type
var myFunction3 = function (x) { return x * 2; };
// Optional Parameter
// Use the ? notation
function myFunction4(a, b) {
    if (typeof b !== 'undefined') {
        return a + b + 5;
    }
    else {
        return a + 5;
    }
}
// Default Value
function myFunction5(a, b) {
    if (b === void 0) { b = 5; }
    return a + b + 5;
    // myFunction(5) = 5+5+5 = 15;
    // myFunction(5,1) = 5+1+5 = 11
}
// Arrow Functions
var sums = function (x, y) {
    return x + y;
};
var printHello = function () { return console.log("Hello Typescript."); };
// Furthermore, if the function body consists of only one statement then no need for the curly brackets and the return keyword, as shown below.
var sum = function (x, y) { return x + y; };
mySecondFunction(3);
