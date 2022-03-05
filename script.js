const URL = 'http://api.weatherapi.com/v1/current.json?key=4377fec0084548c996b185725222302&q=Kiev&aqi=no';

const card_three = document.querySelector('.card-three');
const title_three = document.querySelector('.title-three');
const icon_three = document.querySelector('.icon-three');
const temperature_three = document.querySelector('.temperature-three')

const today = new Date().toJSON().slice(5,10).replace(/-/g,'/');

title_three.innerHTML = today;

fetch(URL)
.then(response => response.json())
.then(data => {
    temperature_three.innerHTML = data.current.temp_c + ' °C';
    icon_three.innerHTML += '<img src=" '+ data.current.condition.icon +' " />';
    })