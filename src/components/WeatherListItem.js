import React from "react";
import WeatherIcon from "./WeatherIcon";
import "../stylesheets/layout/_weatherListItem.scss";

const WeatherListItem = props => {
  const { day, max, min, icon } = props.card;
  return (
    <div className="weather--list-item">
      <WeatherIcon icon={icon} />
      <div className="weather--list-info">
        <p className="weather--list-info-day">{day}</p>
        <div className="weather--list-temp">
          <p className="weather--list-info-max">{max}º </p>
          <p className="weather--list-info-min"> {min}º</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherListItem;
