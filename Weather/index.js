//This is a simple Javascript program that fetch weather data

var inputvalue = document.querySelector('#city')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik="6b64b81297c2bf797b7116bded77da52"

function conversion(val)
{
    return (val - 273).toFixed(3)
}

btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik )
    .then(res => res.json())
    .then(data =>
        {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var temprature = data['main']['temp']
            var windspeed = data['wind']['speed']

            city.innerHTML = `Weather of <span>${nameval}</span>`
            temp.innerHTML = `Temperature: <span>${conversion(temprature)} C</span>`
            description.innerHTML =`Sky Conditions: <span>${descrip}</span>`
            wind.innerHTML= `Wind Speed: <span>${windspeed} km/h</span>`
        })
        
        .catch(err => alert('You Entered Wrong City Name'))
        
        
    })