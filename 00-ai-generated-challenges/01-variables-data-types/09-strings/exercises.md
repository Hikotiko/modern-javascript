# Topic: Working with Strings

## 3 Hands-On Exercises (Increasing Difficulty)

### 1. String Basics
**Task:**  
- Declare a variable containing your full name.
- Print its length, convert to uppercase, and print the result.

---

### 2. Substrings and Searching
**Task:**  
- Given `let sentence = "JavaScript is versatile and powerful.";`
- Print:
  - The index of the word `"versatile"`
  - A substring of "JavaScript is"
  - Whether the sentence includes "powerful"
  - The result of `.replace("JavaScript", "TypeScript")`

---

### 3. String Templates & Dynamic Output
**Task:**  
- Create variables for a product name and price.
- Use a template literal to print something like:  
  `"The product Laptop costs $999."`
- Also, print:  
  `"Price with tax: $XYZ"` (assume a 15% tax, calculate dynamically and show two decimal places).

---

## 3 Real-World Cumulative Examples

### 1. Email Formatter
**Task:**  
- Given a user’s first and last name, generate a lowercase email in the format:  
  `firstname.lastname@company.com`
- Print it.

---

### 2. Input Sanitizer
**Task:**  
- Simulate getting an input with leading/trailing spaces:  
  `let input = "   Hello JavaScript!   ";`
- Trim the spaces, convert to uppercase, and print the result.

---

### 3. Blog Post Preview
**Task:**  
- Given a post:  
  `let post = "JavaScript provides many powerful string methods for developers!"`
- Print the first 30 characters, followed by `"..."` if the original post is longer than 30 characters.

---

## 2 Capstone Projects

### Capstone 1: Customer Profile Generator (Startup)
**Background:**  
A startup needs an automated script to generate display strings for customer profiles. Each customer has `firstName`, `lastName`, and `membershipType` (`"Gold"`, `"Silver"`, `"Bronze"`).
- Output must be:  
  `"Jane Doe is a Gold member."`
- All names should be capitalized, even if input is lowercased or messy like `"jane"`, `"DOE"`.

---

### Capstone 2: Secure Password Validator (Enterprise)
**Background:**  
You’re tasked with writing a password check for internal users. Input comes as a string from a form.
- Password is valid if it’s 8+ characters, contains at least one uppercase letter, one lowercase letter, and one number.
- Print either `"Valid password!"` or an appropriate error message for each rule failed.

---

## 2 Real-Life Support Tickets / Bugs

### 1. Support Ticket: Username Case Bug
**Ticket:**  
_"Some users can't log in when entering their username in uppercase or lowercase even though the system stores them in all lowercase. How can we fix this?"_

---

### 2. Support Ticket: Display Truncation
**Ticket:**  
_"The web app shows long names overflowing UI cards. How can we show just the first 12 characters, followed by '...' when it's too long?"_