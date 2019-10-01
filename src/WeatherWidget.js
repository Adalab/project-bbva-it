import React from "react";
const getCurrentWeather = require("./data/serviceCurrentWeather").getCurrentWeather;
const getForecastWeather = require("./data/serviceForecastWeather").getForecastWeather;

class WeatherWidget extends React.Component {
  constructor() {
    super();
    this.state = {
      currentWeather: {}
    };
  }

  componentDidMount() {
    getCurrentWeather("Madrid").then(currentWeather => this.setState({ currentWeather }));
  }

  render() {
    return <div className="WeatherWidget"></div>;
  }
}

export default WeatherWidget;
