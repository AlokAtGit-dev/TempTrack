const input = document.querySelector('input');
const btn = document.querySelector('button');
const weather = document.querySelector('.weather');
const cityElement = document.querySelector('.city'); // Renamed to cityElement
const icon = document.querySelector('.icon');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');
const minMax = document.querySelector('.min-max');

btn.addEventListener('click', () => {
  const cityName = input.value; // Renamed to cityName
  getWeather(cityName);
});

function getWeather(cityName) {
  console.log(cityName);
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=512f15f237fe18ce940088644df7cd29`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const iconCode = data.weather[0].icon;
      icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png"/>`;

      temp.innerText = `${Math.round(data.main.temp - 273.15)}°C`;
      desc.innerText = data.weather[0].description;
      cityElement.innerText = `${data.name}, ${data.sys.country}`; // Display city and country name
      minMax.innerText = `${Math.round(data.main.temp_min - 273.15)}°C / ${Math.round(data.main.temp_max - 273.15)}°C`;
    })
    .catch(err => console.error('Error fetching weather data:', err));
}
