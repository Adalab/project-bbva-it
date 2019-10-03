const getCurrentWeather = city => {
  const getCityId = () => {
    if (city === "Madrid") {
      return "3117735";
    } else if (city === "Barcelona") {
      return "3128760";
    }
  };

  const endpoint = `http://api.openweathermap.org/data/2.5/weather?id=${getCityId(
    city
  )}&APPID=0c63c7586eaed6d88005102690c6ec7b`;

  return fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .then(data => formatData(data));
};


const formatData = data => {
  const convertTemp = temp => parseInt(temp - 273.15);
  const icon = data.weather[0].icon.slice(0,2)
  return {
    country: data.sys.country,
    city: data.name,
    temp: convertTemp(data.main.temp),
    max: convertTemp(data.main.temp_max),
    min: convertTemp(data.main.temp_min),
    humidity: data.main.humidity,
    icon: icon,
    wind: data.wind.speed
  };
};

module.exports = { formatData, getCurrentWeather };
