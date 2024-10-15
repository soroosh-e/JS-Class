//Array
var names = ['John', 'Mark', 'Jane']
var years = new Array(1990, 1969, 1948)

// console.log(names[0] + ' was born in ' + years[0])
// console.log(names[1] + ' was born in ' + years[1])
// console.log(names[2] + ' was born in ' + years[2])

// console.log(names)

names[1] = 'Ben'

// console.log(names)

// names[names.length] = 'Mary'

// console.log(names)

names.push('Alex') //end of array
names.unshift('Ali') //start of array
names.pop() //remove from end
names.shift() //remove from start
names.indexOf('Mark')

// if (names.length > 0) {
//     alert('array has data')
// }else {
//     alert('empty')
// }

// if(names.indexOf('Ben') === -1) {
//     alert('ben is not on the list')
// }else {
//     alert('ben is in class')
// }

//---------------------------------------------
//Object
var john = {
    firstName: 'john',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['jane', 'mark']
}

console.log(john.firstName + ' ' + john.lastName + ' was born in ' + john.birthYear + ' and has siblings named: ' + john.family[0] + ' ' + john.family[1])

console.log(john['birthYear'])

var jane = new Object();
jane.firstName = 'Jane'
jane.lastName = 'Smith'
jane['birthYear'] = 1996

console.log(jane)