let x;

const name = 'John'
const age = 30

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old'

// Template literals
x = `Hello, my name is ${name} and I am ${age} years old!`

// String Properties and Methods
const s = new String('Hello World')

x = s.length

// Access values by key
x = s[0]

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();




console.log(x);