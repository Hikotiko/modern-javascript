// 3 Hands-On Exercises (Increasing Difficulty)
// 1. Number to String and String to Number
const number1 = 120;

let num_str = String(number1)
let num_str1 = number1.toString()

console.log(num_str, typeof num_str);
console.log(num_str1, typeof num_str1);

// 2. Handling Boolean Conversion
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(''));
console.log(Boolean('Hello'));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));

// 3. Implicit and Explicit Coercion in Expressions
console.log('5' + 2); // first value is a string interpreter is assuming the second value also as string hence the result 52
console.log('5' - 2); // since the operator cannot be a string operator it implicitly assumes that bot are numbers
console.log(true + 1); // true represent the value of 1 and +1 is 2
console.log(false + '0'); // since second value is a string the first value is assumed to be a string as well false0 is the result
console.log(null + 3); // null is assumed to be the number null
console.log('15px' - 5); // the first value consist of numbers and character which cannot be turned into neither a number or a string totally because of the operator.


// 3 Real-World Cumulative Examples
// 1. Form Input Validator
let ageInput = '19'

let aging = Number(ageInput) + 1

console.log(ageInput, typeof ageInput);
console.log(aging, typeof aging);

// 2. API Data Cleanup
let apiValues = ['98', '87.5', 'fail', '']

let first = Number(apiValues[0])
let second = parseFloat(apiValues[1])
let third = Number(apiValues[2])
let fourth = Number(apiValues[3])

console.log(first, typeof first);
console.log(second, typeof second);
console.log(third, typeof third);   // fail scores needs to be defined and with if statement value needs to be assigned
console.log(fourth, typeof fourth);

// 3. User Login Auth Check
// if statements aren't covered yet.

// 2 Capstone Projects
// Capstone 1: User Signup Validation (Startup)
// if is not covered yet

// Capstone 2: Invoice Processor (Enterprise)
n

// 2 Real-Life Support Tickets / Bugs
// 1. Support Ticket: Price Field Bug


// 2. Support Ticket: Loose Comparison Confusion
// because === also expects a data type equality and the == just checks value


