// Hands-on Exercises
// 1. Identify the Type
const person = {
  name: 'John',
  age: 45,
  isMarried: false,
  isDonor: null,
};

let rating;

console.log(person.name, typeof person.name);
console.log(person.age, typeof person.age);
console.log(person.isMarried, typeof person.isMarried);
console.log(person.isDonor, typeof person.isDonor);
console.log(rating, typeof rating);

// 2. Value vs Reference Copy
let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);
// variable a is assigned a value of 10 and then we assign the value of a to the variable b
// next we overwrite the variable b with the value of 20 which results in a = 10 and b =20

// because the primitive values are stored on the heap as a direct value value the
// object/reference are stored as object on the stack which reference the values stored
// in the heap so when you change the value of an value stored on the heap it changes
// it for all the objects referencing to that value

// Real World Examples
// 1. Input type checker
// Functions aren't covered yet so I am not able to do this exercise

// 2. Settings manager
const defaultSettings = {
  theme: 'light',
  lang: 'en',
};

let userSettings = defaultSettings;

userSettings.theme = 'dark';

console.log(defaultSettings);
console.log(userSettings);

// since we are changing the value of a value of an object which is stored on the
// heap, by changing the first variable theme attribute we change the value of the object
// and all that are referencing to that value

// 3. Simple Shopping Cart
// Arrays and array functions aren't covered yet

// Capstone 1: Buggy Profile Form
//not covered yet

const defaultProfile = { plan: 'free', theme: 'dark', welcome: true };
// Registration process:
let newUser = defaultProfile;
newUser.plan = 'premium';
let newUser1 = defaultProfile;
newUser1.plan = 'pro';

console.log(newUser);
console.log(newUser1);

// Capstone 2:
