import React from "react";
import CityButton from "./CityButton";

const Header = props => {
  const { currentCity, changeCity } = props;
  return <header className="header--weather-widget"></header>;
};

export default Header;
