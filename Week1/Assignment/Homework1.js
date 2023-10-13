let a = 2;
let b = 3;
let c = 2;
(a == b) // returns false
(a == c) //returns true

typeof "John Doe" // Returns string
typeof 3.14 // Returns number
typeof true // Returns boolean
typeof 234567890123456789012345678901234567890n // Returns bigint
typeof undefined // Returns undefined
typeof null // Returns object
typeof Symbol('symbol') // Returns symbol

let x = 2;
let y = "2";
(x == y) // Returns true because they are both 2.
(x === y) // Returns false becase x is number and y is string. 

let x = 3;
let y = "3";
x + y // Returns "33" because when we try to add string and number in js, js converts number to string and adds them together.

let x = 24;
let y = "Hello";
x + y // Returns "24Hello", the explanation is same as previous question.

let name = "Vivek";
let surname = " Bisht";
name + surname // Returns "Vivek Bisht"

let x = 3;
let y = "3";
x - y //Returns 0 because when we try to substract it, this time y is converted to number. 

let x = 0;
let y = 23;

if(x) { console.log(x) } //Returns undefined, because x is falsy (0), so the code inside the if statement does not execute.

if(y) { console.log(y) } //Returns 23, because y is truthy (non-zero), so the code inside the if statement executes.

// The isNaN function in JavaScript checks if a given value is "Not-A-Number" (NaN) and returns a Boolean value: true if the value is NaN, and false if it is a valid number or can be converted to one

isNaN("Hello") // Returns true, not a valid number
isNaN(345) // Returns false, is a valid number
isNaN('1') // Returns false, the string '1' can be converted to a number
isNaN(true) // Returns false, true is equivalent to the number 1
isNaN(false) // Returns false, false is equivalent to the number 0
isNaN(undefined) // Returns true, not a valid number