getWeatherData = (city) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "448ccdede3msh8d658a9ef080e31p148ec6jsn28933cf6145b",
      "X-RapidAPI-Host": "bestweather.p.rapidapi.com",
    },
  };

  const url = `https://bestweather.p.rapidapi.com/weather/${city}/today?unitGroup=us`;

  return fetch(url, options)
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.error(err));
};

const searchCity = async () => {
  const city = document.getElementById("city-input").value;
  const data = await getWeatherData(city);
  showWeatherData(data);
};

const showWeatherData = (weatherData) => {
  document.getElementById("weather-type").innerHTML = weatherData.currentConditions.conditions;
  document.getElementById("temp").innerHTML = weatherData.currentConditions.temp;
  document.getElementById("sunrise").innerHTML = weatherData.currentConditions.sunrise;
  document.getElementById("sunset").innerHTML = weatherData.currentConditions.sunset;
};
