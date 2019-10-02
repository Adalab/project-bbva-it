import React from "react";
import "./stylesheets/WeatherWidget.scss";
import WeatherCard from "./components/WeatherCard";
import InfoWeather from "./components/InfoWeather";
import Header from "./components/Header";
import WeatherList from './components/WeatherList'
const getCurrentWeather = require("./data/serviceCurrentWeather").getCurrentWeather;
const getForecastWeather = require("./data/serviceForecastWeather").getForecastWeather;

class WeatherWidget extends React.Component {
  constructor() {
    super();
    this.state = {
      currentCity: "Madrid",
      currentWeather: {},
      forecastWeather: []
    };
    this.changeCity = this.changeCity.bind(this);
  }

  componentDidMount() {
    getCurrentWeather(this.state.currentCity).then(currentWeather => this.setState({ currentWeather }));
    getForecastWeather(this.state.currentCity).then(forecastWeather => this.setState({ forecastWeather }))
  }

  changeCity(currentCity) {
    this.setState({ currentCity }, this.componentDidMount);
  }

  render() {
    const { currentWeather, currentCity , forecastWeather} = this.state;
    return (
      <div className="weather--widget">
        <Header currentCity={currentCity} changeCity={this.changeCity} />
        <main className="main--weather-widget">
          <WeatherCard currentWeather={currentWeather} />
          <InfoWeather currentWeather={currentWeather} />
          <WeatherList forecastWeather={forecastWeather}/>
        </main>
      </div>
    );
  }
}

export default WeatherWidget;
