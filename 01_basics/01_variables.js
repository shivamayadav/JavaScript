// different ways to declare variables
const accountId = 222125
let accountEmail = "example@gmail.com"
var accountPassword = "12345"
accountCity = "Jaunpur"
let accountState;

// accountId = 2  // not allowed (we cannot change const)

accountEmail = "change@gmail.com"
accountPassword = "54321"
accountCity = "Mumbai"

// print data in tabular structure
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

/*
to run this code write in terminal
node 01_basics/01_variables.js
*/