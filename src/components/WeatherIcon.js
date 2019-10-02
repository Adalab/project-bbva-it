import React from "react";

const Cloudy = () => {
  return (
    <div className="icon cloudy">
      <div className="cloud"></div>
      <div className="cloud"></div>
    </div>
  );
};

const Flurries = () => {
  return (
    <div className="icon flurries">
      <div className="cloud"></div>
      <div className="snow">
        <div className="flake"></div>
        <div className="flake"></div>
      </div>
    </div>
  );
};

const Rainy = () => {
  return (
    <div className="icon rainy">
      <div className="cloud"></div>
      <div className="rain"></div>
    </div>
  );
};

const Sunny = () => {
  return (
    <div className="icon sunny">
    <div className="sun">
      <div className="rays"></div>
    </div>
  </div>
  );
};

const SunShower = () => {
  return (
    <div className="icon sun-shower">
      <div className="cloud"></div>
      <div className="sun">
        <div className="rays"></div>
      </div>
      <div className="rain"></div>
    </div>
  );
};

const ThunderStorm = () => {
  return (
    <div className="icon thunder-storm">
      <div className="cloud"></div>
      <div className="lightning">
        <div className="bolt"></div>
        <div className="bolt"></div>
      </div>
    </div>
  );
};

const icons = [
  { description: "few clouds", tag: <Cloudy/> },
  { description: "scattered clouds", tag: <Cloudy/> },
  { description: "broken clouds", tag: <Cloudy/> },
  { description: "thunderstorm", tag: <ThunderStorm/> },
  { description: "snow", tag: <Flurries/> },
  { description: "rain", tag: <SunShower/> },
  { description: "shower rain", tag: <Rainy/> },
  { description: "clear sky", tag: <Sunny/> }
];

const getIcon = description => {
  return icons.find(icon => icon.description === description).tag
}

const WeatherIcon = props => {
  return getIcon(props.description)
}

export default WeatherIcon;
