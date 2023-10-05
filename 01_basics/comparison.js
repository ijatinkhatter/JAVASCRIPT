// COMPARISONS IN JS 

// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 + 1);
// console.log(2 - 1);
// console.log(2 * 1);
// console.log(2 ** 5);
// console.log(2 / 1);
// console.log(2 % 1);

// -------- COMPARE STRING TO NUMBER ----------------

// console.log("11" > 1)
// NOTE: In Javascript, string-number become number when we use commparison operator


// ----------- COMPARE NULL TO 0 ----------------
// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)

// The reason is that an equality operator == and comparisons operator < > <= >= are work differently

// Comparisons convert null to a number, treating it as a 0

// thats why (null >= 0) is true and (null > 0) is false


// --------------- STRICT CHECKER (== ===) -------------
console.log("2" == 2);
console.log("2" === 2);
// BECAUSE === checks value + data type 
// WHILE == only checks value 
