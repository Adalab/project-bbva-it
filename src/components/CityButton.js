import React from "react";

const CityButton = props => {
  const { currentCity, changeCity } = props;
  const handleClick = () => {
    changeCity(currentCity === "Madrid" ? "Barcelona" : "Madrid");
  };
  return <button onClick={handleClick}>{currentCity === "Madrid" ? "Ver Barcelona" : "Ver Madrid"}</button>;
};

export default CityButton;
