document.querySelector('.heading').textContent = 'Hello'

// document.querySelector('.heading').style.color = 'red'

//JavaScript Events
document.querySelector('button').addEventListener('click', function() {
    // document.querySelector('.heading').style.color = 'red'
    document.querySelector('img').style.backgroundColor = '400px'
    document.querySelector('img').src = 'images/1.png'
})

document.getElementById('p1').textContent = 'abc'


// document.getElementById('dark-on').addEventListener('click', function() {
//     document.querySelector('body').classList.add('dark')
// })

// document.getElementById('dark-off').addEventListener('click', function() {
//     document.querySelector('body').classList.remove('dark')
// })

document.getElementById('toggle-dark').addEventListener('click', function() {
    document.querySelector('body').classList.toggle('dark')
})


document.getElementById('form').addEventListener('click', function() {


    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;

    if (!email || !pass) {
        return alert('enter your email or password')
    }


    document.querySelector('.info').textContent = 
                'Your email is: ' + email + ' And your password is: ' + pass;
})