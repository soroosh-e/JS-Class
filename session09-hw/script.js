var names = ['alex', 'john', 'bill', 'avin', 'james']

// var rand = Math.random()
// rand = rand * names.length
// rand = Math.floor(rand)


var list = document.getElementById('list')

for(var i = 0; i < names.length; i++) {
    list.innerHTML += '<li>'+ names[i]+'</li>'
}

document.getElementById('button').addEventListener('click', function() {
    var rand = Math.random()
    rand = rand * names.length
    rand = Math.floor(rand)

    var winner = names[rand]

    document.getElementById('show_winner').innerHTML += '<h5>The winner is : </h5>' + winner;
})