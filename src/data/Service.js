const getCurrentWeather = city => {
  const APIKEY = "0c63c7586eaed6d88005102690c6ec7b";
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`).then(response => response.json());
};

export default getCurrentWeather;
