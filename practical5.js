//create math.js file 

function add(a, b) {
return a + b;
}

function subtract(a, b) {
return a - b;
}

function multiply(a, b) {
return a * b;
}

function divide(a, b) {
return b !== 0 ? a / b : "Cannot divide by zero";
}

module.exports = { add, subtract, multiply, divide };
  

//create app.js file

const math = require("./math");

console.log("Addition:", math.add(10, 5));
console.log("Subtraction:", math.subtract(10, 5));
console.log("Multiplication:", math.multiply(10, 5));
console.log("Division:", math.divide(10, 5));
