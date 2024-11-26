document.getElementById('heading').classList.add('text-danger')


document.getElementById('link').href = 'http://google.com'

var w = document.getElementById('image').getAttribute('width')

document.getElementById('button').addEventListener('click', function() {
    document.getElementById('image').setAttribute('width', 450)

    document.getElementById('image').removeAttribute('height')

})

//Objects in Javascript
//OOP (Object Oriented Prograrmming)

//function constructor
var Person = function(name, year) {
    this.name = name;
    this.year = year;
    this.calcAge = function() {
        console.log(2024 - this.year)
    }
}

var john = new Person('john', 1994)
var jane = new Person('jane', 1990)

john.calcAge()
console.log(jane.name)