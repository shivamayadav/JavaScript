"use strict"; // treat all JS code as newer version

// alert(3 + 3) // gives error because we are using nodejs, not browser

// console.log(3 + 3) console.log("Shivam") // will give error we cannot write this way

console.log(3 + 3); console.log("Shivam") // if we use ; it will not give error but it affects code readability

// code readability should be high
console.log(3 + 3)
console.log("Shivam")


let name = "Shivam" // string
let age = 23 // number
let isLoggedIn = false // boolean


/*
Primitive DataTypes

number => 2 to power 53
bigint => bigger number
string => "" 0r ''
boolean => true/false
null => standalone value (representation of empty value)
undefined => value not assigned
symbol => unique

Non Primitive DataTypes

object
*/

console.log(typeof undefined); // undefined
console.log(typeof null) // object