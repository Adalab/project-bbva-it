import React from "react";
import "./App.css";
import getCurrentWeather from "./data/Service";

function App() {
  getCurrentWeather("Madrid").then(data => console.log(data));
  getCurrentWeather("Barcelona").then(data => console.log(data));
  return <div className="App"></div>;
}

export default App;
