
// string indexing in js

// In JavaScript, strings are sequences of characters, and you can access individual characters within a string using string indexing. String indexing starts at zero, so the first character is at index 0, the second character is at index 1, and so on.

// Here's how you can use string indexing in JavaScript:

const intro =  'Hello Jatin this side!';

// Accessing Individual characters
console.log(intro[0]); // output H
console.log(intro[1]); // output e
console.log(intro[6]); // output J

// String Length
console.log(intro.length); // output 22

// Accessing the last character using length property
console.log(intro[intro.length-1]); // output !

// Iterating through a string
for (let i = 0; i < intro.length; i++) {
    console.log(intro[i]);
}