import React from "react";
const getCurrentWeather = require("./data/Service");

class WeatherWidget extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    getCurrentWeather("Madrid").then(data => console.log(data));
  }

  render() {
    return <div className="WeatherWidget"></div>;
  }
}

export default WeatherWidget;
