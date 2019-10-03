import React from "react";
import WeatherIcon from "./WeatherIcon";
import "../stylesheets/layout/_weatherListItem.scss";

const WeatherListItem = props => {
  const { date, max, min, icon } = props.card;
  return (
    <div className="weather--list-item">
      <WeatherIcon icon={icon} />
      <p className="weather--list-item">{date}</p>
      <p className="weather--list-temp">
        {max}º / {min}º
      </p>
    </div>
  );
};

export default WeatherListItem;
