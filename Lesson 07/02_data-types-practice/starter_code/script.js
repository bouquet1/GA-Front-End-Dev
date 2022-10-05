// Use a console.log to print out "hello world!" by using the given variables. Try using concatenation and interpolation for two different methods.
// How can you do interpolation? https://stackoverflow.com/questions/1408289/how-can-i-do-string-interpolation-in-javascript
// Using research sources, like Documentation and Stack Overflow, is a vital skill for programmers! 
const message = "hello";
const recepient = "world";

console.log(message + " " + recepient + "!");


// One plus one is...? Research as many ways as you can for adding 1 to the number variable.
// Then, console.log the phrase "1 + 1 is 2" by using the updated value of the number variable.
let number = 1;

console.log(number + 1);
console.log(number + number);
console.log(number * 2);
number++;
console.log(number);


// Data types can cause unexpected issues in Javascript. Use the typeof operator to investigate and log the type of the following variables. Your console messages should be formatted like so: "clearancePrice is a number"
// Documentation on typeof: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
const programmingIsCool = true;
const clearancePrice = 1.99;
const lifeTheUniverseAndEverything = 42;
const theCruelestMonth = "April";
const iDoNotKnow = null;

// Type of tells us what type of data is in the variable.

// this is boolean because it is true or false.
console.log(typeof programmingIsCool);

// it comes as a number and the specific type is float
console.log(typeof clearancePrice);

// it comes as a number 
console.log(typeof lifeTheUniverseAndEverything);

// it comes up as a string
console.log(typeof theCruelestMonth);

// it comes up as undefined because iDontExist is not defined above 
console.log(typeof iDoNotExist);

// null comes as object. we'll learn later
console.log(typeof iDoNotKnow);

if(typeof iDoNotExist == 'undefined'){
    console.log('iDontExist has not been set');
}

// writing a function example
function addMe(firstVal, secondVal){
    console.log(firstVal + secondVal)
}

addMe(2,2);
addMe(27817999, 10000000);