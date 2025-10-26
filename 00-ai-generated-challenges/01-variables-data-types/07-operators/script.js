// Hands-On Exercises
// 1. Arithmetic Operators Practice
let num1 = 10
let num2 = 20

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 % num2);

// 2. Compound Assignment and Increment/Decrement
let x = 10

console.log(x += 5);
console.log(x -=3);
console.log(x *= 2);
console.log(x %= 2);

console.log(++x);
console.log(--x);

// 3. Logical and Comparison Operators Challenge
y = 20
z = 10

console.log(y > z);
console.log(y < z);
console.log(y >= z);
console.log(y <= z);
console.log(y === z);
console.log(y !== z);

// didn't cover logic yet

// Real-World Cumulative Examples
// 1. Discount Application
let total = 100

if (total > 50) {
    console.log(total - total * .1)
    
} else {
    console.log(total);
}

// 2. Age Verification
let age = 65

if (age < 18) {
    console.log('You are a minor');
} else if( age >= 18 && age <=64) {
    console.log('You are an adult');
}else {
    console.log('You are a senior');
}

// 3. Multiple Choice Grader
// Exercise is unclear

// 2 Capstone Projects
// Capstone 1: Gym Member Access Control (Startup)
let personAge = 14
let isMember = true

if (personAge >= 16 && isMember) {
    console.log('Entry allowed');
} else if(personAge <16) {
    console.log('Need to be 16 to enter');
} else if(!isMember) {
    console.log('Not a member');
}

// 2: Grading Script for Corporate Training
let score = 40
if (score <50) {
    console.log('Fail');
} else if(score <= 79){
    console.log('Pass');
} else if(score > 79) {
    console.log('Distinction');
}

// Real-Life Support Tickets / Bugs
// 1. Support Ticket: Calculation Error
console.log(total - total * 20 /100);

// probably a pemdas issue

// 2. Support Ticket: Age Restriction Logic
age = 18

if (age >= 18) { allowEntry(); } else { denyEntry(); }