// Hands-on Exercises
// Variable Declaration & Logging (Easy)
let favLanguage = 'JavaScript';
const learnStart = '2025';

console.log(favLanguage, learnStart);

// Reassignment Rules (Moderate)
let city = 'Paris';
city = 'London';
console.log(city);

const country = 'France';
// country = 'UK';
// constants cannot be reassigned because it is a constant

// Scoping (Challenging)
// Scoping is not covered yet so I don't know the answer for this.

// Cumulative Real-World Examples

// Consistent Branding
const brandColor = 'Red';
let backgroundColor = 'Blue';
console.log(backgroundColor);
backgroundColor = 'Orange';
console.log(backgroundColor);
backgroundColor = 'Yellow';
console.log(backgroundColor);

// Website Launch Banner
const launchDate = 2025;
let daysUntilLaunch = launchDate - 1;

console.log(daysUntilLaunch);

// dates aren't covered yet so did this alternative

// User Session State
let isLoggedIn = true;
const maxLogingAttempts = 3;

// Capstone projects
// I am not able to do this since logic and functions arent covered yet.

// Support Ticket
// 1: Const variables cannot be reassigned, if the value needs to updated
// regularly a let assigned variable needs to be used
// 2: var assigned variables are not scoped within a block or function so declaring which results
// in var declared variable being initialized anywhere in the code even unintentionally within a function
// or block
