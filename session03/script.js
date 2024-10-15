//if / else
// var age = prompt('Enter your age')
// var role = prompt('Enter your role')

//Logical Operators (Boolean Logic)
/*
    AND (&&) 
    OR (||)
    NOT (!)
*/

// if (age > 18 || role == 'admin') {
//     alert('welcome to my website')
// }else {
//     alert('403 - Access Denied')
// }

// var access = age >= 18 ? 'welcome' : '403 Access Denied'

// if (age >= 18) {
//     var access = 'welcome'
// }else {
//     var access = '403 Access Denied'
// }


// alert(access)

//Switch
// var job = prompt('enter your job')

// switch(job) {
//     case 'teacher' :
//         alert('welcome dear teacher')
//         break;
//     case 'doctor' :
//         alert('welcome doctor')
//         break;
//     case 'programmer' :
//         alert('welcome doctor')
//         break;
//     default : //else
//         alert('403 Access Denied')
// }


//Truethy - Falsy Values
// falsy values : undefined, null, 0, ' ', NaN

// var num = 0

// if (num || num == 0) {
//     alert('your number is entered')
// }else {
//     alert('enter a number')
// }

/*
    22 == '22'      ->      True
    22 === '22'     ->      False

*/


//function    f(x) = x + 2

// function calculator(x) {
//     return x + 2;
// }

// alert(calculator(2));

var fullName = function (first, last) {
    return 'welcome ' + first + ' ' + last + ' to our website';
}

// var a = prompt('enter name')
// var b = prompt('enter lastname')

// alert(fullName(a, b))

// if (a) {

// } else if (b) {

// } else if (c) {

// } else {

// }


//HW
/*
    Team no.1 :   89     120     103
    Team no.2 :   116     94     123
    Team no.3 :   97     134     105


    Avr.


*/

var t1 = (89+120+103)/3
var t2 = (116+94+123)/3
var t3 = (97+134+105)/3

if (t1 > t2 && t1 > t3) {
    alert('t1 is winner')
}else if (t2 > t1 && t2 > t3) {
    alert('t2 is winner')
}else {
    alert('t3 is winner')
}