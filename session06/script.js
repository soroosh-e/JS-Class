//To the Window
// console.log(this)

// function names() {
//     console.log(this)
// }

// names()


//This in Objects
// var john = {
//     fname: 'john',
//     calculateAge: function() {
//         console.log(this.fname)
//     }
// }

// john.calculateAge()

//Object Math
var num = Math.random() //0~1
num = Math.floor(num)
// alert(num)

alert(Math.floor(Math.random() * 10) + 1)

//DOM
document.querySelector('h1').textContent = 'Finished'
document.querySelector('#box').innerHTML = '<ul><li>List</ul></li>'

//exercise
// function calcBmi(height,weight) {
//     return height * weight;
// }

// alert(calcBmi(ali.height,ali.weight))