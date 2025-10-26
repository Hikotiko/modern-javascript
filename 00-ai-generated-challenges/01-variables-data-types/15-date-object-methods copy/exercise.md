# Topic: Dates and Times in JavaScript

---

## 3 Hands-On Exercises (Increasing Difficulty)

### 1. Date Creation & Basic Methods
**Task:**  
- Create a variable for today's date.
- Print the full date string.
- Print just the current year and month (as numbers).

---

### 2. Date Parsing and Comparison
**Task:**  
- Create a date from the string `"2024-07-20"`.
- Print the day of the week (0–6: Sun–Sat).
- Compare that date to today and print if it's in the past, today, or future.

---

### 3. Date Formatting with Intl.DateTimeFormat
**Task:**  
- Take today’s date and format it as `"Monday, June 10, 2024"` in US English locale.
- Format that same date as `"10 June 2024"` in British English locale.
- Print both results.

---

## 3 Real-World Cumulative Examples

### 1. Countdown Timer
**Task:**  
- Let an event date be `"2024-12-31"`.
- Calculate and print the number of days from today to the event.  
  *(Hint: Use getTime() and math for the difference in days; assume end-of-day for today is fine)*

---

### 2. Invoice Date Formatter
**Task:**  
- Given an invoice date string (e.g. `"2024-06-11T15:07:00Z"`), format and print it as `"11 Jun 2024, 15:07"` in `en-GB`.

---

### 3. Schedule Normalization
**Task:**  
- Given user input date parts:  
  `let yr = 2025, mon = 1, day = 15`  *(mon is 1-based for user, but 0-based for Date object)*
- Create a valid Date object for this date and print the ISO string.

---

## 2 Capstone Projects

---

### Capstone 1: Event Scheduler Helper (Startup)
**Background:**  
A startup is building an event app. You need to:
- Given a list of event date strings, print how many are in the future, past, and today.
- Format all dates into: `"Friday 28 June 2024"` (en-GB locale).

---

### Capstone 2: Employee Birthday Module (Enterprise)
**Background:**  
You’re tasked with a tool to display employee birthdays.
- Given a birthday string (e.g. `"1990-01-12"`), print out:  
  - Employee’s age
  - Their next birthday (as `"Monday, January 12, 2026"`, for example)
- Assume today is not the birthday. Use `Intl.DateTimeFormat`.

---

## 2 Real-Life Support Tickets / Bugs

---

### 1. Support Ticket: Timezone Confusion
**Ticket:**  
_"A user’s local time is always showing incorrectly; for `"2024-06-12T10:30:00Z"` the UI displays their *local* time as if it were UTC. How do we fix this so their time zone is applied?"_

---

### 2. Support Ticket: User Input Month Bug
**Ticket:**  
_"Users entering '1' for January make new dates for February! What’s wrong with our code?"_
