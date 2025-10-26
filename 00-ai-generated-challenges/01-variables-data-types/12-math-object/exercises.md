# Topic: Working with Strings & The Math Object

## 3 Hands-On Exercises (Increasing Difficulty)

### 1. Math Object Basics

**Task:**

- Find the square root of 81 and the absolute value of `-15` using `Math`.
- Print the result of `Math.floor(4.8)` and `Math.ceil(4.2)`.
- Generate a random number between 0 (inclusive) and 1 (exclusive) using `Math.random()`.

---

### 2. Random Integer Generator

**Task:**

- Write code to generate a random integer between 1 and 100 (inclusive) using the Math object.
- Print the result.

---

### 3. String & Math Combo

**Task:**

- Given an input like:  
  `let userInput = "7.86";`
- Convert to a number, round it to the nearest integer, and print both the original string, the numeric value, and the rounded result.

---

## 3 Real-World Cumulative Examples

### 1. Dice Roller

**Task:**

- Simulate rolling a six-sided die using the Math object (output should be 1–6).
- Print a message: "You rolled a 4!"

---

### 2. User Stats Formatter

**Task:**

- A user stats object:  
  `let user = { name: "Alice", points: 49.75 };`
- Print a message:  
  "Alice has 49 points."
- Then, round up the points and print:  
  "Alice’s new high score: 50!"

---

### 3. Password Complexity Meter

**Task:**

- Given any password string, print its length, and a random number between 1–10 that represents a “difficulty score”.

---

## 2 Capstone Projects

### Capstone 1: E-Commerce Price Randomizer (Startup)

**Background:**  
You’re helping a startup add engaging randomness to their flash sale!

- For 5 different products, randomly generate a flash sale price as a whole number between $20 and $50 (inclusive).
- Print each product with its randomized flash sale price.

---

### Capstone 2: Employee ID Generator (Enterprise)

**Background:**  
An internal tool needs to auto-generate unique employee IDs for new hires.

- Each ID should contain: the first 3 letters of the last name (all uppercase) + a random 4-digit number (1000–9999).
- Given several names as input, print out example new employee IDs.

---

## 2 Real-Life Support Tickets / Bugs

### 1. Support Ticket: Rounding Bug

**Ticket:**  
_"A customer reported that when entering ‘49.5’ for points, our app rounds it to 49, but it should be 50. What’s wrong in our code:  
`let rounded = Math.floor(points + 0.5);`  
How should we round to the nearest integer?"_

---

### 2. Support Ticket: Random Quiz Generator

**Ticket:**  
_"Students sometimes get question number 0 in our random quiz picker. Our code is:  
`let question = Math.floor(Math.random() * totalQuestions);`  
If `totalQuestions` is 10, how do we make it produce 1–10 instead of 0–9?"_
