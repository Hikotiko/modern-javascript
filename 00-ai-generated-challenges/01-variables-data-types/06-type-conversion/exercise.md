## 3 Hands-On Exercises (Increasing Difficulty)

### 1. Number to String and String to Number
**Task:**  
- Declare a number variable and convert it to a string using both the `String()` constructor and `.toString()`.
- Declare a string variable with a number value (`'123'`). Convert it to a number using `Number()`, `parseInt()`, and `parseFloat()`.
- Print the result and use `typeof` to confirm types.

---

### 2. Handling Boolean Conversion
**Task:**  
- Use `Boolean()` to show the conversion result of these values: `0`, `1`, `''`, `'hello'`, `undefined`, `null`, `[]`, and `{}`.
- Print each value and its Boolean conversion to the console.

---

### 3. Implicit and Explicit Coercion in Expressions
**Task:**  
- Predict and then log the result and type of each expression:
    1. `'5' + 2`
    2. `'5' - 2`
    3. `true + 1`
    4. `false + '0'`
    5. `null + 3`
    6. `'15px' - 5`
- Explain briefly why each behaves that way in a comment.

---

## 3 Real-World Cumulative Examples

### 1. Form Input Validator
**Task:**  
- Simulate a form field where the user enters age as a string:  
  `let ageInput = '19'`
- Convert this to a number and add 1 (simulate aging), printing both original and converted values/types.

---

### 2. API Data Cleanup
**Task:**   
- Imagine you get user scores from an API as strings (`'98'`, `'87.5'`, `'fail'`, `''`).
- Convert each entry to a number with `Number()` and print the result and type.
- Discuss how invalid or empty inputs are handled.

---

### 3. User Login Auth Check
**Task:**  
- Given user input in a form (could be any value), convert it to a Boolean with `Boolean()`.
- Use this to simulate a "Login" button enabled/disabled check.
- Demonstrate with at least three different kinds of input.

---

## 2 Capstone Projects

### Capstone 1: User Signup Validation (Startup)
**Background:**  
A startup needs signup logic. Users may enter their age as any type (number, '' (empty), string, or even `null`).  
**Requirements:**  
- Check if age can be correctly converted to a usable number (not `NaN`, above 18).
- Print a validation message for several example values: `'20'`, `20`, `''`, `null`, `'abc'`, `'17'`.

---

### Capstone 2: Invoice Processor (Enterprise)
**Background:**  
An internal tool processes invoice amounts from spreadsheets, which sometimes have commas, spaces, or are empty.  
**Requirements:**  
- Clean these examples for processing: `'1,000'`, `' 250.50 '`, `''`, `'0'`, `'free'`
- Convert them to valid numbers (treat non-numeric as zero), explain your logic, and print all conversions and types.

---

## 2 Real-Life Support Tickets / Bugs

### 1. Support Ticket: Price Field Bug
**Ticket:**  
_“Our checkout page sometimes displays `NaN` for the total amount if a user leaves the quantity blank or types an invalid string. How can we prevent this?”_

---

### 2. Support Ticket: Loose Comparison Confusion
**Ticket:**  
_“Why does `4 == '4'` evaluate to true, but `4 === '4'` is false in my input validation?”_
