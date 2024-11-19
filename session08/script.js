var button = document.getElementById('button');
var height = document.getElementById('height');
var weight = document.getElementById('weight');
var show   = document.getElementById('show');
var result = '';

button.addEventListener('click', function() {

    if (!height.value || !weight.value) {
        return alert('Please fill all fields')
    }

    heightInM = height.value / 100;
    var bmi = weight.value / (heightInM**2)

    if (bmi < 18.5) {
        result = 'under'
    }else if (bmi >= 18.5 && bmi <= 24.5) {
        result = 'good'
    }else if (bmi > 24.5) {
        result = 'over'
    }
 
    show.innerHTML = '<div class="alert alert-success">your BMI is ' + result + '</div>';

})