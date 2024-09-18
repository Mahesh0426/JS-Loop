documentation section

## 1. Explain loop in programming ? what are different types of loop in JS?

Ans: A loop in programming is a control flow that allows you to execute a block of code repeatedly based on a certain condition.

### Different Types of Loops in JavaScript

Loops in JavaScript are used to execute a block of code repeatedly based on a condition or to iterate over items. Here are the different types of loops with definitions and examples:

#### i. `for` Loop

**Definition**: The `for` loop executes a block of code a specific number of times. It consists of three parts: initialization, condition, and increment/decrement.

**Example**:

```javascript
// Initialize i to 0, continue looping while i is less than 5, increment i by 1 each time
for (let i = 0; i < 5; i++) {
  console.log(i); // Prints: 0, 1, 2, 3, 4
}
```

#### ii. `while` Loop

**Definition**: The while loop executes a block of code as long as a specified condition is true. The condition is checked before the execution of the loop’s body.

**Example**:

```javascript
let i = 0;
while (i < 5) {
  console.log(i); // Prints: 0, 1, 2, 3, 4
  i++;
}
```

#### iii. `do...while` Loop

**Definition**: The do...while loop is similar to the while loop, but it guarantees that the code block will run at least once before checking the condition. The condition is checked after the code block execution.

**Example**:

```javascript
let i = 0;
do {
  console.log(i); // Prints: 0, 1, 2, 3, 4
  i++;
} while (i < 5);
```

#### iv. `for...in` Loop

**Definition**: The for...in loop iterates over the enumerable properties of an object (or array), including inherited properties. It is generally used for objects.

**Example**:

```javascript
let person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
  console.log(key + ": " + person[key]); // Prints: name: John, age: 30, city: New York
}
```

#### v. `for...of `Loop

**Definition**: The for...of loop iterates over the values of iterable objects such as arrays, strings, or other collections. It does not work with plain objects.

**Example**:

```javascript
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
  console.log(fruit); // Prints: apple, banana, orange
}
```

## 2. Differentiate beth while and do while loop ?

#### Differentiate Between `while` and `do...while` Loop

| Feature                 | `while` Loop                                                                                                              | `do...while` Loop                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **Condition Check**     | Checks the condition before the loop executes.                                                                            | Checks the condition after the loop executes.                                                       |
| **Execution Guarantee** | May not execute if the condition is false initially.                                                                      | Guarantees at least one execution of the loop body.                                                 |
| **Syntax**              | while (condition) <br> { <br>//block of code <br> }                                                                       | <br>do {<br> // block of code<br>} while (condition);<br>                                           |
| **Use Case**            | Used when you want to loop only if a condition is true and potentially skip the loop if the condition is false initially. | Used when you want to ensure that the loop body executes at least once regardless of the condition. |
| **Example**             | <br>let i = 0;<br>while (i < 5) {<br> console.log(i);<br> i++;<br>}<br>                                                   | <br>let i = 0;<br>do {<br> console.log(i);<br> i++;<br>} while (i < 5);<br>                         |

## 3.Explain What `break` and `continue` Are in Loops ?

#### i. `break` Statement

**Definition**: The `break` statement stops the execution of the loop and continues with the code that follows the loop. It is often used to exit a loop early when a certain condition is met.

**Use Case**: Use `break` when you need to stop the loop based on a specific condition that isn't necessarily related to the loop’s condition.

**Example**:

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Skip the iteration when i is 5
  }
  console.log(i); // Prints: 0, 1, 2, 3, 4
}
```

#### ii. `continue` Statement

**Definition**: The `continue` statement skips the current iteration of the loop and continues with the next one. It is often used to skip over elements in an array or object that do not meet certain criteria.

**Use Case**: Use `continue` when you need to skip over certain iterations based on a condition but still continue looping.

**Example**:

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip the rest of the loop body for even numbers
  }
  console.log(i); // Prints: 1, 3, 5, 7, 9
}
```
