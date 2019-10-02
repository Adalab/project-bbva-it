import React from "react";
import Cloudy from "./icons/Cloudy";
import Flurries from "./icons/Flurries";
import Rainy from "./icons/Rainy";
import Sunny from "./icons/Sunny";
import SunShower from "./icons/SunShower";
import ThunderStorm from "./icons/ThunderStorm";

const icons = [
  { description: "few clouds", tag: Cloudy },
  { description: "scattered clouds", tag: Cloudy },
  { description: "broken clouds", tag: Cloudy },
  { description: "thunderstorm", tag: ThunderStorm },
  { description: "snow", tag: Flurries },
  { description: "rain", tag: SunShower },
  { description: "shower rain", tag: Rainy },
  { description: "clear sky", tag: Sunny }
];

const getIcon = description => {
  const icon = icons.find(icon => {
    // console.log(icon.description)
    return description === icon.description
  });
  console.log(icon.tag)}

const WeatherListItem = props => {
  const { date, max, min, description } = props.card;
  getIcon(description);
  return (
    <div className="weather--list-item">
      {/* <div className="weather-list-item-image"><{getIcon(description)}/></div> */}
      <p className="weather--list-item">{date}</p>
      <p className="forecast__max">Máx: {max}º</p>
      <p className="forecast__min">Min: {min}º</p>
    </div>
  );
};

export default WeatherListItem;
