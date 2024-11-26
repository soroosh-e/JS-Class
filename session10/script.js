//ES6 - ES2015

//Variables
//ES5
var fname = 'jane';
fname = 'mary'

//ES6
const fname2 = 'Alex'

let age2 = 20
age2 = 30


console.log(age2)


if (1 < 2) {
    const lname = 'bbbbbbbb'
}

// console.log(lname)

// (function() {
//     var c = 3
// }) ();

// console.log(c)


//ES5
console.log('Welcome to my website, ' + fname + ' ' + fname2)

//ES6
console.log(`Welcome to my website, ${fname} ${fname2}`)


console.log(fname2.startsWith('A'))
console.log(fname2.endsWith('x'))
console.log(fname2.includes('e'))
console.log(fname2.repeat(5))