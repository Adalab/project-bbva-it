import React from "react";
import WeatherCard from "./components/WeatherCard";
import InfoWeather from "./components/InfoWeather";
import CityButton from "./components/CityButton";
const getCurrentWeather = require("./data/serviceCurrentWeather")
  .getCurrentWeather;
const getForecastWeather = require("./data/serviceForecastWeather")
  .getForecastWeather;

class WeatherWidget extends React.Component {
  constructor() {
    super();
    this.state = {
      currentCity: "Madrid",
      currentWeather: {}
    };
    this.changeCity = this.changeCity.bind(this);
  }

  componentDidMount() {
    getCurrentWeather(this.state.currentCity).then(currentWeather =>
      this.setState({ currentWeather })
    );
  }

  changeCity(currentCity) {
    this.setState({ currentCity }, this.componentDidMount);
  }

  render() {
    const { currentWeather, currentCity } = this.state;
    return (
      <div className="WeatherWidget">
        <h2>{currentCity}</h2>
        <CityButton currentCity={currentCity} changeCity={this.changeCity} />
        <WeatherCard currentWeather={currentWeather} />
        <InfoWeather currentWeather={currentWeather} />
      </div>
    );
  }
}

export default WeatherWidget;
