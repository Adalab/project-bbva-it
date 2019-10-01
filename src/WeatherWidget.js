import React from "react";
import WeatherCard from "./components/WeatherCard";
import InfoWeather from "./components/InfoWeather";
const getCurrentWeather = require("./data/serviceCurrentWeather")
  .getCurrentWeather;
const getForecastWeather = require("./data/serviceForecastWeather")
  .getForecastWeather;

class WeatherWidget extends React.Component {
  constructor() {
    super();
    this.state = {
      currentWeather: {}
    };
  }

  componentDidMount() {
    getCurrentWeather("Madrid").then(currentWeather =>
      this.setState({ currentWeather })
    );
  }

  render() {
    const { currentWeather } = this.state;
    return (
      <div className="WeatherWidget">
        <WeatherCard currentWeather={currentWeather} />
        <InfoWeather currentWeather={currentWeather} />
      </div>
    );
  }
}

export default WeatherWidget;
