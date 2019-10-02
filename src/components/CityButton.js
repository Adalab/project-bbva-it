import React from "react";
import "../stylesheets/components/_citybutton.scss";

const CityButton = props => {
  const { currentCity, changeCity } = props;
  const handleClick = () => {
    changeCity(currentCity === "Madrid" ? "Barcelona" : "Madrid");
  };
  return (
    <button className="city--button" onClick={handleClick}>
      {currentCity === "Madrid" ? "Barcelona" : "Madrid"}
    </button>
  );
};

export default CityButton;
