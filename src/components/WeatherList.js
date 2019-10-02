import React from "react";
import WeatherListItem from "./WeatherListItem";

const WeatherList = props => {
  const renderList = () => {
    return props.forecastWeather.map((card, index) => {
      return (
        <li  key={index} className="weather--list-li">
          <WeatherListItem card={card}/>
        </li>
      );
    });
  }
  return <ul className="weather--list">{renderList()}</ul>;
};

export default WeatherList;
