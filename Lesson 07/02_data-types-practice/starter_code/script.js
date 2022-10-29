// Use a console.log to print out "hello world!" by using the given variables. Try using concatenation and interpolation for two different methods.
// How can you do interpolation? https://stackoverflow.com/questions/1408289/how-can-i-do-string-interpolation-in-javascript
// Using research sources, like Documentation and Stack Overflow, is a vital skill for programmers! 
const message = "hello";
const recepient = "world";

console.log(message + " " + recepient + "!");
// in JS you can use both double quote or single quote k=just don't mix them. If you start with double quote close it with double quote. If you start with single quote close it with single quote.
console.log(message + ' ' + recepient + '!');

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

// it comes up as undefined because iDontExist is not defined above as a variable
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


function hal(myName){
    console.log("I'm sorry, " + myName + ". I can't do that.")
}

hal('Dabby');
// console output= I'm sorry, Dabby. I can't do that.

function borek(tomato, cucumber) {
    console.log("Would you like to have your pastry with " + tomato + " or " + cucumber + "?")
}

borek('potato', 'cheese');
// console output= Would you like to have your pastry with potato or cheese?

function cocoa(Ingr1, Ingr2){
    console.log("Do you want " + Ingr1 + " or " + Ingr2 + " in your cocoa?")
}

cocoa('extra sugar', 'extra milk');
// console output= Do you want extra sugar or extra milk in your cocoa?

cocoa('sugar', 'cinnamon');
// Do you want sugar or cinnamon in your cocoa?

function divide(a,b){
    console.log(a / b)
}

divide(12,2);
// in console = 6
divide(100, 5);
// in console = 20

function nameFun(myName){
    let nameLength = myName.length;
    console.log("The name " + myName + ' has ' + nameLength + ' letters.')
}
// single or double quotes didn't matter and the function still worked.

nameFun('Dave');
nameFun('Tor');
// The name Dave has 4 letters.
// The name Tor has 3 letters.


function quest(person){
    console.log('Hey, ' + person + ' Do you like to drink tequila?')
}

quest('Daniel');
quest('Nelly');
quest('Buket');
// Hey, Daniel Do you like to drink tequila?
// Hey, Nelly Do you like to drink tequila?
// Hey, Buket Do you like to drink tequila?

document.write("<h1>'Do you like to drink tequila?</h1>");
// output in the webpage is 'Do you like to drink tequila?
