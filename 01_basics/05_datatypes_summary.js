// Basically data types are divided into two types

// PRIMITIVE & NON-PRIMITIVE(REFERENCE TYPE)

// basic difference is that :-

// How the data is stored in a memory and how we can access it

//  --------- PRIMITIVE DATA TYPES -----------
//   {number, string, boolean, null, undefined, bigint, symbol}

const num = 22
const myString = "Jatin"
const isLoggendIn = false
let userState
const bigNum = 2233n
const id = Symbol('123')

// ------- REFERENCE TYPE (NON-PRIMITIVE TYPE) ----------
//  array, object, function

const myArray = ["superman", "spiderman", "krish"]
const myObject =  {
    name: "jatin",
    age: 21
}
const myFunction = function(){
    console.log("hello world!")
}


// ------------------------------------------------------------

// ~~~~~~~~~ Lets find out TYPEOF of every data type ~~~~~~~~~~

// console.log(typeof num);
// console.log(typeof myString);
// console.log(typeof isLoggendIn);
// console.log(typeof userState);
// console.log(typeof bigNum);
// console.log(typeof id);


// console.log(typeof myArray);
// console.log(typeof myObject);
// console.log(typeof myFunction); // output : function (but its called object-function)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// -------------------------------------------------------
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// STACK (primitive) & HEAP (non-primitive)

let myName = "jatin"
let yourName = myName

yourName = "Rohit"

console.log(myName);
console.log(yourName);


// ----- REFERENCE TYPE --------------------------------

let myObj = {
    name: "Jkay",
    age: 21
}

let newObj = myObj

newObj.name = "Rohit"

console.log(myObj);
console.log(newObj);