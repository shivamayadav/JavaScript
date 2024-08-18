// Primitive (Call by value) (if we make any changes wo copy me hoga original value me nahi)
// 7 types : String, Nmuber, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
console.log(typeof score); // number
console.log(typeof scoreValue); // number

const isLoggedIn = false
const outsideTemp = null
let userEmail;
console.log(typeof isLoggedIn); // boolean
console.log(typeof outsideTemp); // object
console.log(typeof userEmail); // undefined

const id = Symbol('123') // symbol used to define unique
const anotherId = Symbol('123') // symbol makes value unique
console.log(id === anotherId); // false
console.log(typeof id); // symbol

const bigNumber = 236635675567372n
console.log(typeof bigNumber); // bigint

// Non Primitive (Reference type)
// Array, Objects, Function

const heros = ["shaktiman", "naagraj", "doga"];
console.log(typeof heros); // object

let myObj = {
    name: 'shivam',
    age: 22,
}
console.log(typeof myObj); // object

const myFunction = function(){
    console.log("Hello World!");
}
console.log(typeof myFunction); // function




// ***************************************************************************************************

// Stack (Primitive), Heap (Non-Primitive)
// Primitive Stack memory ke andar jaate hai aur stack memory se value ka copy milta hai
// Non-Primitive heap memory ke andar jaate hai aur heap memory se value nahi reference milta hai

let myYoutubename = "TheRoamerShivam";

let anothername = myYoutubename;
anothername = "ShivamCodingSchool"

console.log(myYoutubename); // TheRoamerShivam
console.log(anothername); // ShivamCodingSchool



let userOne = {
    email: "userOne@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "userTwo@google.com";

console.log(userOne.email); // userTwo@google.com
console.log(userTwo.email); // userTwo@google.com