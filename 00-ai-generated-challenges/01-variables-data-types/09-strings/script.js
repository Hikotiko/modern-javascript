// 3 Hands-On Exercises
// 1. String Basics
const fullName = 'Hikmet Demirci';

console.log(fullName.length);
console.log(fullName.toUpperCase());

// 2. Substrings and Searching
let sentence = 'JavaScript is versatile and powerful.'

console.log(sentence.indexOf('versatile'));
console.log(sentence.substring(0,13));
console.log(sentence.includes('powerful'));
console.log(sentence.replace('JavaScript', 'TypeScript'));

// 3. String Templates & Dynamic Output
const product = 'Laptop'
let price = 999

console.log(`The product ${product} costs $${price}.`);

let tax = price * 1.15

console.log(`Price with tax: $${tax.toFixed(2)}`);

// 3 Real-World Cumulative Examples
// 1. Email Formatter
// const firstName = 'Hikmet'
// const lastName = 'Demirci'
// const companyName = 'company.com'
// let email = firstName.toLowerCase() + '.' + lastName.toLowerCase() + '@' + companyName
// console.log(email);

// 2. Input Sanitizer
let input = ' Hello JavaScript! ';
console.log(input.trim().toUpperCase());

// 3. Blog Post Preview
let post = 'JavaScript provides many powerful string methods for developers!'
console.log(post.substring(0,30) + '...');

// 2 Capstone Projects
// Capstone 1: Customer Profile Generator (Startup)
let firstName = 'hikmet'
let lastName = 'DEMIRCI'
let memberShipType = 'Gold'

firstName = firstName.charAt(0).toUpperCase() + firstName.toLowerCase().substring(1)
lastName = lastName.charAt(0).toUpperCase() + lastName.toLowerCase().substring(1)
console.log(`${firstName} ${lastName} is a ${memberShipType} member.`);

// Capstone 2: Secure Password Validator (Enterprise)
//conditions and loops are not covered yet I beleive I am not
// there to be able to answer this excercise

// 2 Real-Life Support Tickets / Bugs
// 1. Support Ticket: Username Case Bug
// By building in a function that converts the input into all lowercase
// before sending it for confirmation.

// 2. Support Ticket: Display Truncation
// By implementing a substring and concatenating it with the 3 dots and
// use this as display value in the cards.