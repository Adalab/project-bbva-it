import React from "react";
import WeatherIcon from './WeatherIcon'

const WeatherCard = props => {
  const { currentWeather } = props;
  return (
    <section className="current__weather">
      <h2 className="current__temp">{currentWeather.temp}º</h2>
      <div className="current__description">
        <WeatherIcon icon={currentWeather.icon}/>
      </div>
      <p className="current__day">Hoy</p>
    </section>
  );
};

export default WeatherCard;
