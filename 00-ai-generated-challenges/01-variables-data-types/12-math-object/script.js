// 3 Hands-On Exercises
// 1. Math Object Basics
console.log(Math.sqrt(81));
console.log(Math.abs(-15));
console.log(Math.floor(4.8));
console.log(Math.ceil(4.2));

let randomNumber = Math.random()

console.log(randomNumber);

// 2. Random Integer Generator
x = Math.floor(Math.random() * 100 + 1)

console.log(x);

// 3. String & Math Combo

y = Math.floor(Math.random() * 6 + 1)

console.log(`You rolled a ${y}`);

// 2. User Stats Formatter
let user = {name: 'Alice', points: 49.75}

console.log(`${user.name} has ${user.points}`);
console.log(`${user.name}\'s new high score: ${Math.ceil(user.points)}`);

// 3. Password Complexity Meter
let password = 'MySuperStrongpassword'
let length = password.length
let difficultyScore = Math.floor(Math.random() * 10 + 1)

console.log(`Password length: ${length}`);
console.log(`Difficulty: ${difficultyScore}`);

// 2 Capstone Projects
// Capstone 1: E-Commerce Price Randomizer (Startup)
// Loops and conditions aren't covered yet. So I am not able to do
// this exercise

// Capstone 2: Employee ID Generator (Enterprise)
let lastName = 'Boudewijn'

let Id = lastName.substring(0,3).toUpperCase() + Math.floor(Math.random() * 9999 + 1000)

console.log(Id);

// 2 Real-Life Support Tickets / Bugs
// 1. Support Ticket: Rounding Bug
// Instead of using the floor function the ceil function should be used.

// 2. Support Ticket: Random Quiz Generator
// By adding + 1 to the calculation of random Number.