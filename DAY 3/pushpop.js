//Adding and Removing Elements in js
//Adding Elements: 

// --------- Push Method ------------  
// This method adds one or more elements to the end of an array and returns the new length of the array.

// let fruits = ['apple', 'banana', 'lichi']
// fruits.push('mango')
// console.log(fruits); //output [ 'apple', 'banana', 'lichi', 'mango' ]
// -------------------------------------------------------


// --------- Unshift Method ------------ 
//  this method adds one or more elements at the beginning of an array and returns the new length of the array

// let fruits = ['apple', 'banana', 'lichi']
// fruits.unshift('mango')
// console.log(fruits); //output : [ 'mango', 'apple', 'banana', 'lichi' ]
// -------------------------------------------------------


// -------- Concatenation ----------
//  you can concatenate two arrays using "concat" method

// let fruits = ['apple', 'banana',]
// let moreFruits = ['cherry', 'date'];
// let allFruits = fruits.concat(moreFruits);

// console.log(allFruits); // output : [ 'apple', 'banana', 'cherry', 'date' ]
// -------------------------------------------------------


// ------------ POP METHOD ----------
//  REMOVE THE LAST ELEMENT AND RETURNS THE ELEMENT
// let fruits = ['apple', 'banana', 'lichi']
// let removedFruit = fruits.pop();
// console.log(fruits);
// console.log(removedFruit);
// ---------------------------------------------------------


// ------------ SHIFT METHOD ----------
//  REMOVE THE first ELEMENT AND RETURNS THE ELEMENT
let fruits = ['apple', 'banana', 'lichi']
let removedFruit = fruits.shift();
console.log(fruits);
console.log(removedFruit);
// ---------------------------------------------------------
