# Topic: Arrays (Creation, Methods, Nesting, concat, spread)

---

## 3 Hands-On Exercises (Increasing Difficulty)

### 1. Array Creation and Access
**Task:**  
- Create an array of your 5 favorite programming languages.
- Print the first and last language.
- Print the total number of languages (using `.length`).

---

### 2. Basic Array Methods & Nesting  
**Task:**  
- Given:  
  `let nums = [2, 4, 6];`
- Use `.push()` to add another number.
- Use `.unshift()` to add one more at the start.
- Remove the last item with `.pop()`.
- Nest `nums` in a new array: `let allArrays = [nums, ['a', 'b', 'c']];`
- Print the first element of the nested nums array, and the last letter from the second inner array.

---

### 3. concat and Spread
**Task:**  
- Create two arrays: `[1, 2, 3]` and `[4, 5, 6]`.
- Use `.concat()` to make one big array, then do the same with the spread operator.
- Print both combined arrays.
- Add `'END'` to both using spread, and print the final result.

---

## 3 Real-World Cumulative Examples

### 1. Guest List Formatter
**Task:**  
- Given an array of names, create a comma-separated guest list string using `.join()`, and print:  
  `"Guests: Alice, Bob, Charlie"`

---

### 2. Shopping Cart Quantity Update
**Task:**  
- Suppose your cart is `[1, 2, 3, 4]` (item quantities).  
- Add a new quantity at the end, remove the first item, then double every remaining quantity using `.map()`.
- Print the final array.

---

### 3. Nested Categories  
**Task:**  
- Create an array of arrays representing categories and subcategories (ex: `[['laptops', 'phones'], ['shirts', 'pants']]`).
- Use the spread operator to flatten this to a single array with all items.

---

## 2 Capstone Projects

---

### Capstone 1: Dynamic Dashboard (Startup)
**Background:**  
A startup wants to build a customizable dashboard.  
- Users have an array of “widgets” (like `['weather', 'stocks', 'news']`).  
- Allow the user to add a widget to the start, remove the last one, combine with another user’s widgets using spread, and display the final dashboard widgets.

---

### Capstone 2: Product Merger (Enterprise)
**Background:**  
You’re helping merge inventory for two divisions:  
- Both have arrays of product names (with possible duplicates).
- Merge them (with spread), then build an array of **unique** product names using a `Set` and spread.
- Print both the merged list (with duplicates) and the deduplicated list.

---

## 2 Real-Life Support Tickets / Bugs

---

### 1. Support Ticket: Concat Side-Effect
**Ticket:**  
_"When we use `.concat()` to merge customer lists, sometimes the original list changes unexpectedly. Why?"_

---

### 2. Support Ticket: Nested Array Access
**Ticket:**  
_"Our UI displays 'undefined' when trying to show the last subcategory in  
`let categories = [['laptops', 'phones'], ['shirts', 'pants']];`  
with  
`categories[2][1]`  
What's the mistake?"_
