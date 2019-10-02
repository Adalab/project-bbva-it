import React from "react";

const WeatherCard = props => {
  const { currentWeather } = props;
  return (
    <section className="current__weather">
      <h2 className="current__temp">{currentWeather.temp}º</h2>
      <p className="current__description">{currentWeather.description}</p>
      <p className="current__day">Hoy</p>
    </section>
  );
};

export default WeatherCard;
