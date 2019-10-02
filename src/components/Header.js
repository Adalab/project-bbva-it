import React from "react";
import CityButton from "./CityButton";

const Header = props => {
  const { currentCity, changeCity } = props;
  return (
    <header className="header--weather-widget">
      <h2>{currentCity}</h2>
      <CityButton currentCity={currentCity} changeCity={changeCity} />
    </header>
  );
};

export default Header;
