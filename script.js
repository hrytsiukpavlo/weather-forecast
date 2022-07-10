const forecast_city = document.querySelector('#forecast-city');

const success = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longtitude;
    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;

    fetch(geoApiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.city.length === 0) {
                forecast_city.innerHTML += 'Your city has not been recognized, therefore it was atomatically set to Kyiv';
                current_URL = 'http://api.weatherapi.com/v1/current.json?key=4377fec0084548c996b185725222302&q=Kiev&aqi=no';
                history_URL = 'http://api.weatherapi.com/v1/history.json?key=4377fec0084548c996b185725222302&q=Kiev&dt=';
                future_URL = 'http://api.weatherapi.com/v1/forecast.json?key=4377fec0084548c996b185725222302&q=Kiev&days=3&aqi=no&alerts=no';
                render();
            } else {
                if(data.city === 'Kyiv') {
                    current_URL = 'http://api.weatherapi.com/v1/current.json?key=4377fec0084548c996b185725222302&q=Kiev&aqi=no';
                    history_URL = 'http://api.weatherapi.com/v1/history.json?key=4377fec0084548c996b185725222302&q=Kiev&dt=';
                    future_URL = 'http://api.weatherapi.com/v1/forecast.json?key=4377fec0084548c996b185725222302&q=Kiev&days=3&aqi=no&alerts=no';
                    render();
                }
                current_URL = `http://api.weatherapi.com/v1/current.json?key=4377fec0084548c996b185725222302&q=${data.city}&aqi=no`;
                history_URL = `http://api.weatherapi.com/v1/history.json?key=4377fec0084548c996b185725222302&q=${data.city}&dt=`;
                future_URL = `http://api.weatherapi.com/v1/forecast.json?key=4377fec0084548c996b185725222302&q=${data.city}&days=3&aqi=no&alerts=no`;
                forecast_city.innerHTML += `Weather forecast for ${data.city}`
                render();
            }
            
        })
        .catch(error => {
            console.error(error)
        })
}

const error = () => {
    forecast_city.innerHTML += 'You have denied access to your location, therefore it was atomatically set to Kyiv';
    current_URL = 'http://api.weatherapi.com/v1/current.json?key=4377fec0084548c996b185725222302&q=Kiev&aqi=no';
    history_URL = 'http://api.weatherapi.com/v1/history.json?key=4377fec0084548c996b185725222302&q=Kiev&dt=';
    future_URL = 'http://api.weatherapi.com/v1/forecast.json?key=4377fec0084548c996b185725222302&q=Kiev&days=3&aqi=no&alerts=no';
    render();
}

navigator.geolocation.getCurrentPosition(success, error);


let current_URL = 'http://api.weatherapi.com/v1/current.json?key=4377fec0084548c996b185725222302&q=Kiev&aqi=no';
let history_URL = 'http://api.weatherapi.com/v1/history.json?key=4377fec0084548c996b185725222302&q=Kiev&dt=';
let future_URL = 'http://api.weatherapi.com/v1/forecast.json?key=4377fec0084548c996b185725222302&q=Kiev&days=3&aqi=no&alerts=no';

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

const back_title_zero = document.querySelector('.back-title-zero');
const back_title_one = document.querySelector('.back-title-one');
const back_title_two = document.querySelector('.back-title-two');
const back_title_three = document.querySelector('.back-title-three');
const back_title_four = document.querySelector('.back-title-four');
const back_title_five = document.querySelector('.back-title-five');
const back_title_six = document.querySelector('.back-title-six');

card_zero.addEventListener('click', function() {
    card_zero.classList.toggle('zero-flipped')
    if (document.querySelector('.zero-flipped')) {
        document.querySelector('.zero-front').style.display = 'none';
        document.querySelector('.zero-back').style.display = 'flex';
        document.querySelector('.zero-back').style.alignItems = 'center';
        document.querySelector('.zero-back').style.justifyContent = 'center';
    } else {
        document.querySelector('.zero-front').style.display = 'flex';
        document.querySelector('.zero-back').style.display = 'none';
    }
})

card_one.addEventListener('click', function() {
    card_one.classList.toggle('one-flipped')
    if (document.querySelector('.one-flipped')) {
        document.querySelector('.one-front').style.display = 'none';
        document.querySelector('.one-back').style.display = 'flex';
        document.querySelector('.one-back').style.alignItems = 'center';
        document.querySelector('.one-back').style.justifyContent = 'center';
    } else {
        document.querySelector('.one-front').style.display = 'flex';
        document.querySelector('.one-back').style.display = 'none';
    }
})

card_two.addEventListener('click', function() {
    card_two.classList.toggle('two-flipped')
    if (document.querySelector('.two-flipped')) {
        document.querySelector('.two-front').style.display = 'none';
        document.querySelector('.two-back').style.display = 'flex';
        document.querySelector('.two-back').style.alignItems = 'center';
        document.querySelector('.two-back').style.justifyContent = 'center';
    } else {
        document.querySelector('.two-front').style.display = 'flex';
        document.querySelector('.two-back').style.display = 'none';
    }
})

card_three.addEventListener('click', function() {
        card_three.classList.toggle('three-flipped')
        if (document.querySelector('.three-flipped')) {
            document.querySelector('.three-front').style.display = 'none';
            document.querySelector('.three-back').style.display = 'flex';
            document.querySelector('.three-back').style.alignItems = 'center';
            document.querySelector('.three-back').style.justifyContent = 'center';
        } else {
            document.querySelector('.three-front').style.display = 'flex';
            document.querySelector('.three-back').style.display = 'none';
        }
})

card_four.addEventListener('click', function() {
    card_four.classList.toggle('four-flipped')
    if (document.querySelector('.four-flipped')) {
        document.querySelector('.four-front').style.display = 'none';
        document.querySelector('.four-back').style.display = 'flex';
        document.querySelector('.four-back').style.alignItems = 'center';
        document.querySelector('.four-back').style.justifyContent = 'center';
    } else {
        document.querySelector('.four-front').style.display = 'flex';
        document.querySelector('.four-back').style.display = 'none';
    }
})

card_five.addEventListener('click', function() {
    card_five.classList.toggle('five-flipped')
    if (document.querySelector('.five-flipped')) {
        document.querySelector('.five-front').style.display = 'none';
        document.querySelector('.five-back').style.display = 'flex';
        document.querySelector('.five-back').style.alignItems = 'center';
        document.querySelector('.five-back').style.justifyContent = 'center';
    } else {
        document.querySelector('.five-front').style.display = 'flex';
        document.querySelector('.five-back').style.display = 'none';
    }
})

card_six.addEventListener('click', function() {
    card_six.classList.toggle('six-flipped')
    if (document.querySelector('.six-flipped')) {
        document.querySelector('.six-front').style.display = 'none';
        document.querySelector('.six-back').style.display = 'flex';
        document.querySelector('.six-back').style.alignItems = 'center';
        document.querySelector('.six-back').style.justifyContent = 'center';
    } else {
        document.querySelector('.six-front').style.display = 'flex';
        document.querySelector('.six-back').style.display = 'none';
    }
})

title_zero.innerHTML = minus_three.slice(5,10).replace('-', '.');
title_one.innerHTML = minus_two.slice(5,10).replace('-', '.');
title_two.innerHTML = minus_one.slice(5,10).replace('-', '.');
title_three.innerHTML = today.slice(5,10).replace('-', '.');
title_four.innerHTML = plus_one.slice(5,10).replace('-', '.');
title_five.innerHTML = plus_two.slice(5,10).replace('-', '.');
title_six.innerHTML = plus_three.slice(5,10).replace('-', '.');

function render() {
    fetch(history_URL + minus_three)
    .then(response => response.json())
    .then(data => {
        temperature_zero.innerHTML = Math.floor(data.forecast.forecastday[0].day.avgtemp_c) + ' °C';
        icon_zero.innerHTML += '<img src=" '+ data.forecast.forecastday[0].day.condition.icon +' " />';
        back_title_zero.innerHTML += 'Condition: ' + data.forecast.forecastday[0].day.condition.text + '<br>' + 'Avg. humidity: ' + data.forecast.forecastday[0].day.avghumidity + '%' + '<br>' + 'Max. wind: ' + data.forecast.forecastday[0].day.maxwind_kph +' KPH' + '<br>' + 'Total precip: ' + data.forecast.forecastday[0].day.totalprecip_mm + ' MM' + '<br>' + 'UV-index: ' + data.forecast.forecastday[0].day.uv + '<br>' + 'Avg. visibility: ' + data.forecast.forecastday[0].day.avgvis_km + ' KM';
    })

fetch(history_URL + minus_two)
    .then(response => response.json())
    .then(data => {
        temperature_one.innerHTML = Math.floor(data.forecast.forecastday[0].day.avgtemp_c) + ' °C';
        icon_one.innerHTML += '<img src=" '+ data.forecast.forecastday[0].day.condition.icon +' " />';
        back_title_one.innerHTML += 'Condition: ' + data.forecast.forecastday[0].day.condition.text + '<br>' + 'Avg. humidity: ' + data.forecast.forecastday[0].day.avghumidity + '%' + '<br>' + 'Max. wind: ' + data.forecast.forecastday[0].day.maxwind_kph +' KPH' + '<br>' + 'Total precip: ' + data.forecast.forecastday[0].day.totalprecip_mm + ' MM' + '<br>' + 'UV-index: ' + data.forecast.forecastday[0].day.uv + '<br>' + 'Avg. visibility: ' + data.forecast.forecastday[0].day.avgvis_km + ' KM';
    })

fetch(history_URL + minus_one)
    .then(response => response.json())
    .then(data => {
        temperature_two.innerHTML = Math.floor(data.forecast.forecastday[0].day.avgtemp_c) + ' °C';
        icon_two.innerHTML += '<img src=" '+ data.forecast.forecastday[0].day.condition.icon +' " />';
        back_title_two.innerHTML += 'Condition: ' + data.forecast.forecastday[0].day.condition.text + '<br>' + 'Avg. humidity: ' + data.forecast.forecastday[0].day.avghumidity + '%' + '<br>' + 'Max. wind: ' + data.forecast.forecastday[0].day.maxwind_kph +' KPH' + '<br>' + 'Total precip: ' + data.forecast.forecastday[0].day.totalprecip_mm + ' MM' + '<br>' + 'UV-index: ' + data.forecast.forecastday[0].day.uv + '<br>' + 'Avg. visibility: ' + data.forecast.forecastday[0].day.avgvis_km + ' KM';
    })

fetch(current_URL)
    .then(response => response.json())
    .then(data => {
        temperature_three.innerHTML = Math.floor(data.current.temp_c) + ' °C';
        icon_three.innerHTML += '<img src=" '+ data.current.condition.icon +' " />';
        back_title_three.innerHTML += 'Condition: ' + data.current.condition.text + '<br>' + 'Feels like: ' + Math.floor(data.current.feelslike_c) + ' °C' + '<br>' + 'Humidity: ' + data.current.humidity + '%' + '<br>' + 'Wind: ' + data.current.wind_kph + ' KPH' + '<br>' + 'Wind direction: ' + data.current.wind_dir + '<br>' + 'Precip: ' + data.current.precip_mm + ' MM' + '<br>' + 'UV-index: ' + data.current.uv + '<br>' + 'Visibility: ' + data.current.vis_km + ' KM';
        })

fetch(future_URL)
    .then(response => response.json())
    .then(data => {
        temperature_four.innerHTML = Math.floor(data.forecast.forecastday[0].day.maxtemp_c) + ' °C';
        temperature_five.innerHTML = Math.floor(data.forecast.forecastday[1].day.maxtemp_c) + ' °C';
        temperature_six.innerHTML = Math.floor(data.forecast.forecastday[2].day.maxtemp_c) + ' °C';
        icon_four.innerHTML += '<img src=" '+ data.forecast.forecastday[0].day.condition.icon +' " />';
        icon_five.innerHTML += '<img src=" '+ data.forecast.forecastday[1].day.condition.icon +' " />';
        icon_six.innerHTML += '<img src=" '+ data.forecast.forecastday[2].day.condition.icon +' " />';
        back_title_four.innerHTML += 'Condition: ' + data.forecast.forecastday[0].day.condition.text + '<br>' + 'Avg. humidity: ' + data.forecast.forecastday[0].day.avghumidity + '%' + '<br>' + 'Max. wind: ' + data.forecast.forecastday[0].day.maxwind_kph + ' KPH' + '<br>' + 'Total precip: ' + data.forecast.forecastday[0].day.totalprecip_mm + ' MM' + '<br>' + 'UV-index: ' + data.forecast.forecastday[0].day.uv + '<br>' + 'Avg. visibility: ' + data.forecast.forecastday[0].day.avgvis_km + ' KM' + '<br>' + 'Rain chance: ' + data.forecast.forecastday[0].day.daily_chance_of_rain + '%' + '<br>' + 'Snow chance: ' + data.forecast.forecastday[0].day.daily_chance_of_snow + '%';
        back_title_five.innerHTML += 'Condition: ' + data.forecast.forecastday[1].day.condition.text + '<br>' + 'Avg. humidity: ' + data.forecast.forecastday[1].day.avghumidity + '%' + '<br>' + 'Max. wind: ' + data.forecast.forecastday[1].day.maxwind_kph + ' KPH' + '<br>' + 'Total precip: ' + data.forecast.forecastday[1].day.totalprecip_mm + ' MM' + '<br>' + 'UV-index: ' + data.forecast.forecastday[1].day.uv + '<br>' + 'Avg. visibility: ' + data.forecast.forecastday[1].day.avgvis_km + ' KM' + '<br>' + 'Rain chance: ' + data.forecast.forecastday[1].day.daily_chance_of_rain + '%' + '<br>' + 'Snow chance: ' + data.forecast.forecastday[1].day.daily_chance_of_snow + '%';
        back_title_six.innerHTML += 'Condition: ' + data.forecast.forecastday[2].day.condition.text + '<br>' + 'Avg. humidity: ' + data.forecast.forecastday[2].day.avghumidity + '%' + '<br>' + 'Max. wind: ' + data.forecast.forecastday[2].day.maxwind_kph + ' KPH' + '<br>' + 'Total precip: ' + data.forecast.forecastday[2].day.totalprecip_mm + ' MM' + '<br>' + 'UV-index: ' + data.forecast.forecastday[2].day.uv + '<br>' + 'Avg. visibility: ' + data.forecast.forecastday[2].day.avgvis_km + ' KM' + '<br>' + 'Rain chance: ' + data.forecast.forecastday[2].day.daily_chance_of_rain + '%' + '<br>' + 'Snow chance: ' + data.forecast.forecastday[2].day.daily_chance_of_snow + '%';
    })
}
