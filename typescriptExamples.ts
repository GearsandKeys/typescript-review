//Advantages include scalability, more errors caught before deployment, JS works in TS

// General static format is:
// let variableName: type = value;

// Number
let numberVariable : number = 10;

// String
let stringVariable : string = "10";

// Boolean
let boolVariable : boolean = true;

// ARRAYS
// Number Array
let arrayOfNums : number[] = [10,9,8];

// String Array
let arrayOfStrings : string[] = ["salt", "pepper", "bread", "eggs"];

// tuple: A special structure that allows values of different types
let tupleName: [number, string, number];
tupleName = [10, "9", 8]
// A good example might be an element or a car model
let car1: [string, string, number];
car1 = ["Ford", "Mustang", 2020];

// FUNCTIONS
// We provide the type of the params, and the type of the return
function myFunction(x: number): number {
    return x*2;
}

// If a function has no return we use void, just like C#
let y: number = 0;
function mySecondFunction(x: number): void {
    y = x*2;
    console.log(" Y is " + y);
}

// Anonymous Functions
// Still need to return the parameter and return type
let myFunction3 = function(x: number): number { return x*2; };

// Optional Parameter
// Use the ? notation
function myFunction4(a: number, b?:number): number {
    if (typeof b !== 'undefined'){
        return a+b+5;
    } else {
        return a+5;
    }
}

// Default Value
function myFunction5(a: number, b = 5): number {
    return a+b+5;
    // myFunction(5) = 5+5+5 = 15;
    // myFunction(5,1) = 5+1+5 = 11
}

// Arrow Functions
let sums = (x: number, y:number): number => {
    return x + y;
}

let printHello = () => console.log("Hello Typescript.")

// Furthermore, if the function body consists of only one statement then no need for the curly brackets and the return keyword, as shown below.
let sum = (x: number, y: number) => x + y;

mySecondFunction(3);

/*
to test Typescript we can install a TS compiler using:
"npm install -g typescript"
afterwards we can use "tsc -v" to check our version.
If it worked, it will make a JS type of a TS file so we can 
test it using node.

1.  tsc typescriptExamples.ts
2.  node typescriptExamples.js

*/