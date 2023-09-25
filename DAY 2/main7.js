// BIG INT

// let number = 1234;
// console.log(typeof number, number);
// console.log(Number.MAX_SAFE_INTEGER);

// lets use bigint
//  we can use bigint with two different formats

let number = BigInt(123);
let newNumber = 12n;
console.log(typeof number, typeof newNumber); // output bigint bigint

// add them

let add = number  + newNumber;
console.log(add, typeof add); //output 135n bigint