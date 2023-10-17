// array basic 2

const marvel_heros = ["ironman", "spiderman", "hulk"]
const dc_heros = ["batman", "superman", "flash"]

// ------------------------------------------------
//        👇 ARRAY COMBINATION METHODS 👇
// ------------------------------------------------
//                  METHOD 1 = PUSH

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// ------------------------------------------------
//                  METHOD 2 : CONCAT 

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


// ------------------------------------------------
//  METHOD 3 : SPREAD OPERATOR (VERY EASY ND MOST USEFUL) 

// const allHeros = [...marvel_heros, ...dc_heros]
// console.log(allHeros);


// ----------------------------------------------------
// IF THERE IS A SITUATION WHEN :- (array ke ander array hai or usee ek hi array mai convert krna hai to .flat() use krte hai with "infinity depth")
//--------------------------------

// const anotherArray = [ 1,2,3, [4,5,6], 7, [6,7 ,[4,5]]]
// const realAnotherArray = anotherArray.flat(Infinity)

// console.log(realAnotherArray);


//--------------------------------------------------------
//--------------------------------------------------------
//  when we found there is an array or not and if not we want it to convert in array 

console.log(Array.isArray("jatin"))
console.log(Array.from("jatin"))
console.log(Array.from({name: "jatin"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

/////////////////////////////////