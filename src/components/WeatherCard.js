import React from "react";

const WeatherCard = props => {
  console.log("props->>>", props);
  const { currentWeather } = props;
  return (
    <main className="current__weather">
      <h2 className="current__temp">{currentWeather.temp}º</h2>
      <p className="current__description">{currentWeather.description}</p>
      <p className="current__day">Hoy</p>
    </main>
  );
};

export default WeatherCard;
