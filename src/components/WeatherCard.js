import React from "react";
import CityButton from "./CityButton";
import InfoWeather from "./InfoWeather";
import "../stylesheets/layout/_weathercard.scss";

const WeatherCard = props => {
  const { currentWeather, currentCity, changeCity } = props;
  return (
    <section className="current__weather">
      <div className="temperature--content">
        <h2 className="current--temp">{currentWeather.temp}º</h2>
        <div className="city--content">
          <h3 className="title--city">{currentCity}</h3>
          <span className="line"></span>
          <CityButton
            className="city--button"
            currentCity={currentCity}
            changeCity={changeCity}
          />
        </div>
        <p className="current--day">Hoy</p>
        <InfoWeather currentWeather={currentWeather} />
      </div>
      <div className="icon--content">
        <div class="icon sun-shower">
          <div class="cloud"></div>
          <div class="sun">
            <div class="rays"></div>
          </div>
          <div class="rain"></div>
        </div>
      </div>
    </section>
  );
};

export default WeatherCard;
