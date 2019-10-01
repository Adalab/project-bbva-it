import React from "react";

const InfoWeather = props => {
  const { currentWeather } = props;
  return (
    <section className="current__info">
      <p className="current__max">Máx: {currentWeather.max}º</p>
      <p className="current__min">Min: {currentWeather.min}º</p>
      <p className="current__humidity">Humidity: {currentWeather.humidity}</p>
    </section>
  );
};

export default InfoWeather;
