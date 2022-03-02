const apiKey = `b2efb3406d0f8e98b44e416559fe3e57`;

const searchTemperature = () => {
    const city = document.getElementById('input-city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}
// get eliment by id 
const changeWeather = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    // console.log(temperature);
    // set city name
    changeWeather('city-name', temperature.name);
    // set temperature 
    changeWeather('temperature', temperature.main.temp);
    // set weather 
    changeWeather('situation', temperature.weather[0].main);
    // set icon 
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.setAttribute('src', url);

}