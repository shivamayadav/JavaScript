"use strict";

let score1 = 33
let score2 = "55"
let score3 = "33abc"
let score4 = null
let score5 = undefined
let score6 = true

console.log("score1 = " + score1);
console.log("score2 = " + score2);
console.log("score3 = " + score3);
console.log("score4 = " + score4);
console.log("score5 = " + score5);
console.log("score6 = " + score6);

console.log("type of score1: " + typeof score1);
console.log("type of score2: " + typeof(score2));
console.log("type of score3: " + typeof score3);
console.log("type of score4: " + typeof score4);
console.log("type of score5: " + typeof score5);
console.log("type of score6: " + typeof score6);

let score2InNumber = Number(score2)
let score3InNumber = Number(score3)
let score4InNumber = Number(score4)
let score5InNumber = Number(score5)
let score6InNumber = Number(score6)

console.log("score2 after conversion = " + score2InNumber);
console.log("score3 after conversion = " + score3InNumber);
console.log("score4 after conversion = " + score4InNumber);
console.log("score5 after conversion = " + score5InNumber);
console.log("score6 after conversion = " + score6InNumber);

console.log("type of score2 after conversion: " + typeof(score2InNumber))
console.log("type of score3 after conversion: " + typeof(score3InNumber))
console.log("type of score4 after conversion: " + typeof(score4InNumber))
console.log("type of score5 after conversion: " + typeof(score5InNumber))
console.log("type of score6 after conversion: " + typeof(score6InNumber))


/*
converting into number

"55" => 33
"33abc" => NaN
true => 1
false => 0

converting into boolean

1 => true
0 => false
"" => false
"Shivam" => true
*/