// 3 Hands-On Exercises
// 1. Date Creation & Basic Methods
let today = new Date();

console.log(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`)

console.log(today.getFullYear());

// 2. Date Parsing and Comparison
let string = '2024-07-20'
let d = new Date(string)
let dow = d.getDay()


console.log(d);
console.log(dow);

// 3. Date Formatting with Intl.DateTimeFormat
today = Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(today)
today = new Date()
today = Intl.DateTimeFormat('en-GB', {day: 'numeric', month:'long', year: 'numeric'}).format(today)
console.log(today);

// 3 Real-World Cumulative Examples
// 1. Countdown Timer
let eventDate = new Date('2025-12-31')

let eventTimeToEvent = eventDate.getTime() - new Date().getTime()

let daysToEvent = eventTimeToEvent / 1000 / 60 / 60 /24

console.log(daysToEvent);

// 2. Invoice Date Formatter
let invoiceDate = '2024-06-11T15:07:00Z'
let parsedDate = new Date(invoiceDate)

let printDate = Intl.DateTimeFormat('en-GB', {day: 'numeric',month: 'short',hour: '2-digit', minute: '2-digit', year: 'numeric', timeZone: 'UTC'}).format(parsedDate)

console.log(printDate);

// 3. Schedule Normalization
let yr = 2025, mon = 1, day = 15
let dateObject = new Date(yr, mon+1,day+1)

console.log(dateObject);

// 2 Capstone Projects
// Capstone 1: Event Scheduler Helper (Startup)
// if logic and loops aren't covered yet

// Capstone 2: Employee Birthday Module (Enterprise)
let birthDay = '1990-01-12'
let birthDayParsed = new Date(birthDay)

let age = new Date().getFullYear() - birthDayParsed.getFullYear()
let nextbirtDay = new Date (birthDayParsed.setFullYear(new Date().getFullYear() + 1))
console.log(age);
console.log(nextbirtDay);

// 2 Real-Life Support Tickets / Bugs
// 1. Support Ticket: Timezone Confusion
// By adding the correct timezone via the Intl API.

// 2. Support Ticket: User Input Month Bug
// The numeric entry for dates are 0 based so for january the interpreter expects
// 0, by adding the +1 in the month calculation before being processed will fix the problem