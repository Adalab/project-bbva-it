import React from "react";

const InfoWeather = props => {
  const { currentWeather } = props;
  return (
    <section className="current--info">
      <p className="current--max">{currentWeather.max}º </p>
      <p className="current--min"> {currentWeather.min}º</p>
      <p className="current--humidity">Humidity: {currentWeather.humidity}</p>
    </section>
  );
};

export default InfoWeather;
