// Let's create 4 functions!

// 0. Add 4 to a number

function addFour(inputNumber){
    let outputNumber = inputNumber + 4
    return outputNumber
}

console.log(addFour(4));
console.log(addFour(-1));
console.log(addFour(36));

// 1. Square of a number

// Create a function called `squared` that takes one argument
// The function will return the argument times itself (the square of the number)

function squared(math2){
    return math2 * math2
}
// or this could work too
//     function squared(math2){
//     let result = math2 * math2
//     return result
// }

console.log(squared(2));
console.log(squared(5));
console.log(squared(-3));

// BONUS: Check if the argument is a number first! (Hint: conditionals - if statements)

// 2. Get string length!

// Create a function called `stringLength` that returns the length of a string (how many characters?)
// So: stringLength("hello") would return 5


function stringLength(x){
    let newLength = x.length
    return newLength
}

console.log(stringLength("testing"))
console.log(stringLength("This is a longer string."))

// I also wrote this and put in the log and it worked, too!
// function stringLength(x){
//     outputString = x.length
//     return outputString
// }




// 3. Add two numbers together

// Create a function called addNumbers
// Takes two arguments and returns the sum of those arguments

function addNumbers(one, two){
    return one + two
}

console.log(addNumbers(4, 2));
console.log(addNumbers(6, 3));
console.log(addNumbers(2, 8));

// 4. Create a function called sayHello
// Takes one argument
// Returns a string that is the combination of "Hello, " + the argument passed into the function
// So sayHello("Paul") would return "Hello, Paul";

function sayHello(userNAme){
    let sentence = ("Hello, " +userNAme)
    return sentence
}

console.log(sayHello("Paul"));
console.log(sayHello("Buket"));