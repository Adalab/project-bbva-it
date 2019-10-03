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

const icons = { 
  '02': <Cloudy/>,
  '03': <Cloudy/>,
  '04': <Cloudy/>,
  '50': <Cloudy/>,
  '11': <ThunderStorm/>,
  '13': <Flurries/>,
  '10': <SunShower/>,
  '09': <Rainy/>,
  '01': <Sunny/>,
};

const getIcon = icon => {
  return icons[icon]
}

const WeatherIcon = props => {
  return(
    <div>
      {getIcon(props.icon)}
    </div>
  )
}

export default WeatherIcon;
