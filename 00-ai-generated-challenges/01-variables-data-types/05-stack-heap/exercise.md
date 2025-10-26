# Topic: Data Types & Primitive vs Reference Types

## 3 Hands-On Exercises (increasing difficulty)

### 1. Identify the Type

**Task:**  
Declare variables containing a string, number, boolean, null, undefined, and an object.  
Use `typeof` to log the type of each variable.

---

### 2. Value vs Reference Copy

**Task:**  
Create a variable `let a = 10;`  
Create another variable `let b = a;` and change `b` to 20.  
Print both `a` and `b`.  
Then, do the same with objects:

```js
let obj1 = { color: 'blue' };
let obj2 = obj1;
obj2.color = 'red';
```

Print both `obj1` and `obj2`.  
Comment on the results.

---

### 3. Immutable vs Mutable

**Task:**  
Show how changing a primitive (number or string) does NOT affect other variables copied from it.  
Then, show how changing an array or object through one reference changes it for all variables sharing that reference.

---

## 3 Real-World Cumulative Examples (cover everything so far)

### 1. Input Type Checker (Easy)

**Task:**  
Create a function that takes any value and prints whether it’s a “primitive” or “reference” type (use your course notes to decide). Test it with at least three different types!

---

### 2. Settings Manager (Moderate)

**Task:**  
Have a constant `const defaultSettings = { theme: 'light', lang: 'en' };`  
Assign it to `let userSettings = defaultSettings;`  
Change `userSettings.theme` to `'dark'`.  
Print both objects—what do you observe?  
Discuss how to prevent accidental changes to the default settings.

---

### 3. Simple Shopping Cart

**Task:**  
Declare a shopping cart as an array, and create another variable that "copies" it (let cart2 = cart1).  
Add an item to `cart2`.  
Print both cart1 and cart2—what happens?  
Next, create a true copy of the array so that changing one does _not_ affect the other.  
_Hint:_ Use `slice()` or spread operator.

---

## 2 Capstone Projects

---

### Capstone 1: Buggy Profile Form (Startup)

**Background:**  
A startup’s registration form saves the default user profile in an object, then “copies” it for each new signup:

```js
const defaultProfile = { plan: 'free', theme: 'dark', welcome: true };
// Registration process:
let newUser = defaultProfile;
newUser.plan = 'premium';
```

Support is complaining that _every new user appears to have the same plan after the first edit_.

**Your Task:**

1. Debug why this happens, and
2. Rewrite the code so each new user gets an independent profile.

---

### Capstone 2: Notification Center Refactor (Corporate Tool)

**Background:**  
The intranet tool stores notification settings as an object, and toggles preferences frequently.  
After a bug-fix, users report that their notification settings sometimes change mysteriously when another user updates theirs.

**Your Task:**

- Demonstrate with code how shared references cause side effects.
- Refactor it so each user gets a safe, separate settings object.

---

## 2 Real-Life Support Tickets / Bugs

### 1. Shared Array Issue

**Ticket:**  
_Customers report that adding an item to their order cart also adds it to another customer’s cart if they checked out at the same time._

**Task:**

- Identify the root cause in code comments.
- Show how you’d fix it with a proper array copy.

---

### 2. Data Mutation Bug

**Ticket:**  
_A team member notices that updating one user’s settings also changes the “defaults” for all future users._

**Task:**

- Explain the primitive/reference pitfall causing this.
- Provide a fixed implementation.

---
