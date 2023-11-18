//JavaScript
// AI-generated code. Review and use carefully. More info on FAQ.

// This is a javascript template
// You can use it to write your own code

// Define a function that takes two parameters and returns their sum
function add(a, b) {
  return a + b;
}

// Define a function that takes two parameters and returns their difference
function subtract(a, b) {
  return a - b;
}

// Define a function that takes two parameters and returns their product
function multiply(a, b) {
  return a * b;
}

// Define a function that takes two parameters and returns their quotient
function divide(a, b) {
  // Check if the divisor is zero to avoid division by zero error
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// Test the functions with some examples
console.log(add(2, 3)); // 5
console.log(subtract(10, 4)); // 6
console.log(multiply(5, 6)); // 30
console.log(divide(12, 4)); // 3

// You can also use the template literal syntax to create strings with variables inside curly braces
let name = "Alice";
let age = 25;
let greeting = `Hello, ${name}. You are ${age} years old.`;

console.log(greeting); // Hello, Alice. You are 25 years old.