const current_URL = 'http://api.weatherapi.com/v1/current.json?key=4377fec0084548c996b185725222302&q=Kiev&aqi=no';
const history_URL = 'http://api.weatherapi.com/v1/history.json?key=4377fec0084548c996b185725222302&q=Kiev&dt=';
const future_URL = 'http://api.weatherapi.com/v1/forecast.json?key=4377fec0084548c996b185725222302&q=Kiev&days=3&aqi=no&alerts=no';

const card_zero = document.querySelector('.card-zero');
const title_zero = document.querySelector('.title-zero');
const icon_zero = document.querySelector('.icon-zero');
const temperature_zero = document.querySelector('.temperature-zero')
const card_one = document.querySelector('.card-one');
const title_one = document.querySelector('.title-one');
const icon_one = document.querySelector('.icon-one');
const temperature_one = document.querySelector('.temperature-one')
const card_two = document.querySelector('.card-two');
const title_two = document.querySelector('.title-two');
const icon_two = document.querySelector('.icon-two');
const temperature_two = document.querySelector('.temperature-two')
const card_three = document.querySelector('.card-three');
const title_three = document.querySelector('.title-three');
const icon_three = document.querySelector('.icon-three');
const temperature_three = document.querySelector('.temperature-three');
const card_four = document.querySelector('.card-four');
const title_four = document.querySelector('.title-four');
const icon_four = document.querySelector('.icon-four');
const temperature_four = document.querySelector('.temperature-four');
const card_five = document.querySelector('.card-five');
const title_five = document.querySelector('.title-five');
const icon_five = document.querySelector('.icon-five');
const temperature_five = document.querySelector('.temperature-five');
const card_six = document.querySelector('.card-six');
const title_six = document.querySelector('.title-six');
const icon_six = document.querySelector('.icon-six');
const temperature_six = document.querySelector('.temperature-six');

const minus_three = new Date(Date.now() - 86400000 * 3).toJSON().slice(0,10);
const minus_two = new Date(Date.now() - 86400000 * 2).toJSON().slice(0,10);
const minus_one = new Date(Date.now() - 86400000).toJSON().slice(0,10);
const today = new Date().toJSON().slice(0,10);
const plus_one = new Date(Date.now() + 86400000).toJSON().slice(0,10);
const plus_two = new Date(Date.now() + 86400000 * 2).toJSON().slice(0,10);
const plus_three = new Date(Date.now() + 86400000 * 3).toJSON().slice(0,10);

title_zero.innerHTML = minus_three;
title_one.innerHTML = minus_two;
title_two.innerHTML = minus_one;
title_three.innerHTML = today;
title_four.innerHTML = plus_one;
title_five.innerHTML = plus_two;
title_six.innerHTML = plus_three;


fetch(history_URL + minus_three)
    .then(response => response.json())
    .then(data => {
        temperature_zero.innerHTML = Math.floor(data.forecast.forecastday[0].day.avgtemp_c) + ' °C';
        icon_zero.innerHTML += '<img src=" '+ data.forecast.forecastday[0].day.condition.icon +' " />';
    })

fetch(history_URL + minus_two)
    .then(response => response.json())
    .then(data => {
        temperature_one.innerHTML = Math.floor(data.forecast.forecastday[0].day.avgtemp_c) + ' °C';
        icon_one.innerHTML += '<img src=" '+ data.forecast.forecastday[0].day.condition.icon +' " />';
    })

fetch(history_URL + minus_one)
    .then(response => response.json())
    .then(data => {
        temperature_two.innerHTML = Math.floor(data.forecast.forecastday[0].day.avgtemp_c) + ' °C';
        icon_two.innerHTML += '<img src=" '+ data.forecast.forecastday[0].day.condition.icon +' " />';
    })

fetch(current_URL)
    .then(response => response.json())
    .then(data => {
        temperature_three.innerHTML = Math.floor(data.current.temp_c) + ' °C';
        icon_three.innerHTML += '<img src=" '+ data.current.condition.icon +' " />';
        })

fetch(future_URL)
    .then(response => response.json())
    .then(data => {
        temperature_four.innerHTML = Math.floor(data.forecast.forecastday[0].day.avgtemp_c) + ' °C';
        temperature_five.innerHTML = Math.floor(data.forecast.forecastday[1].day.avgtemp_c) + ' °C';
        temperature_six.innerHTML = Math.floor(data.forecast.forecastday[2].day.avgtemp_c) + ' °C';
        icon_four.innerHTML += '<img src=" '+ data.forecast.forecastday[0].day.condition.icon +' " />';
        icon_five.innerHTML += '<img src=" '+ data.forecast.forecastday[1].day.condition.icon +' " />';
        icon_six.innerHTML += '<img src=" '+ data.forecast.forecastday[2].day.condition.icon +' " />';
    })

