//Object and Methods

// var john = {
//     calcAge : function(birthYear) {
//         return 2024-birthYear
//     }
// }

// console.log(john.calcAge(1990))

var john = {
    birthYear: 1992,
    calcAge : function() {
        return 2024 - this.birthYear
    }
}

var jane = {
    birthYear: 1990,
    calcAge : function() {
        return 2024 - this.birthYear
    }
}

// if (john.calcAge() > jane.calcAge()) {
//     alert('John is older than Jane')
// }else {
//     alert('Jane is older than John')
// }


// console.log(john.calcAge())

//Loop
for (var i = 0; i < 10 ; i++) {
    console.log(i)
}

var names = ['John', 'Mark', 'Jane', 'Alex']

for (var i = 0; i < names.length; i++) {
    // console.log(names[i])
}

//While Loop
var i = 0
while(i < names.length) {
    console.log(names[i]);
    i++;

    // if (names[i] == 'Mark') {
    //     break;
    // }
}

console.log(name1)

//JS Version
//2009 -> ES5
//2015 -> ES6 (ECMA Script 2015) : The Biggest Update

//Hoisting
var name1; //Declare
name1 = 'john' //Assign

//Global Variable
var a = 1
function first() { //Lexical Scoping
    var b = 2;
    sescond
    function sescond() {
        var c = 3;
        console.log(a+b+c)
    }
}
first()