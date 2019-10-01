import React from "react";
const getCurrentWeather = require("./data/serviceCurrentWeather").getCurrentWeather;
const getForecastWeather = require("./data/serviceForecastWeather").getForecastWeather;

class WeatherWidget extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    getCurrentWeather("Madrid").then(data => console.log(data));
    getForecastWeather("Madrid").then(data => console.log(data));
  }

  render() {
    return <div className="WeatherWidget"></div>;
  }
}

export default WeatherWidget;
