## 3 Hands-On Exercises (Increasing Difficulty)

### 1. Arithmetic Operators Practice
**Task:**  
- Declare two numbers.  
- Use `+`, `-`, `*`, `/`, and `%` to perform operations.  
- Print each result.

---

### 2. Compound Assignment and Increment/Decrement
**Task:**  
- Declare a variable, set it to 10.
- Use `+=` to add 5, `-=` to subtract 3, `*=`, `/=`, and `%=` for various updates.
- Demonstrate `++` and `--`.
- Print the result after each operation.

---

### 3. Logical and Comparison Operators Challenge
**Task:**  
- Compare two numbers using `>`, `<`, `>=`, `<=`, `===`, and `!==`.  
- Use logical operators (`&&`, `||`, `!`) in at least two statements to check conditions (e.g., "is this number positive AND even?").
- Print the Boolean result for each case.

---

## 3 Real-World Cumulative Examples

### 1. Discount Application
**Task:**  
- Let a cart total be 75. If total is over 50, apply a 10% discount using operators and print the discounted value.

---

### 2. Age Verification
**Task:**  
- Given an age input, use comparison operators to check if someone is a minor (under 18), an adult (18–64), or a senior (65+), and print the category.

---

### 3. Multiple Choice Grader
**Task:**  
- Store two answers: correct and user’s answer.
- Use `===` to compare and print if the answer is right or wrong.

---

## 2 Capstone Projects

### Capstone 1: Gym Member Access Control (Startup)
**Background:**  
Build a check-in system. User provides their age and membership status (`true`/`false`).  
- Use logical and comparison operators to only allow entry for members age 16+, and print “Entry allowed” or the reason for denial.
- Test at least three scenarios.

---

### Capstone 2: Grading Script for Corporate Training
**Background:**  
Corporate learners are scored 0–100 (string or number input).  
- Convert a sample input to a number, categorize as 'Fail' (<50), 'Pass' (50–79), or 'Distinction' (80+), and print both score and message.

---

## 2 Real-Life Support Tickets / Bugs

### 1. Support Ticket: Calculation Error
**Ticket:**  
_"A bug report says our checkout shows wrong totals when applying a `20% off` discount operator:  
`total - total * 20 / 100`"  
What’s wrong, and how do you fix it?_

---

### 2. Support Ticket: Age Restriction Logic
**Ticket:**  
_"Users aged 18 are not being let in, but they should be. The code is:  
`if (age > 18) { allowEntry(); } else { denyEntry(); }`  
Fix the logic so 18-year-olds are allowed."_
