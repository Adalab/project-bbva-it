import React from "react";
import WeatherIcon from "./WeatherIcon";

const WeatherListItem = props => {
  const { date, max, min, description } = props.card;
  return (
    <div className="weather--list-item">
      <WeatherIcon description={description}/>
      <p className="weather--list-item">{date}</p>
      <p className="forecast__max">Máx: {max}º</p>
      <p className="forecast__min">Min: {min}º</p>
    </div>
  );
};

export default WeatherListItem;
