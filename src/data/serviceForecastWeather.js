const getForecastWeather = city => {
  const getCityId = () => {
    if (city === "Madrid") {
      return "3117735";
    } else if (city === "Barcelona") {
      return "3128760";
    }
  };

  const endpoint = `http://api.openweathermap.org/data/2.5/forecast?id=${getCityId(city)}&APPID=0c63c7586eaed6d88005102690c6ec7b`;

  return fetch(endpoint)
    .then(response => response.json())
    .then(data => formatData(data));
};

const selectData = data => {
  const arr = data.list.slice(8, 32);
  console.log(arr);
  const day2 = arr.slice(0);
};

const formatData = data => {
  selectData(data);
  const convertedTemp = parseInt(data.main.temp - 273.15);
  return {
    country: data.sys.country,
    city: data.name,
    temp: convertedTemp,
    max: data.main.temp_max,
    min: data.main.temp_min,
    humidity: data.main.humidity,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    wind: data.wind.speed
  };
};

module.exports = { getForecastWeather, formatData };
