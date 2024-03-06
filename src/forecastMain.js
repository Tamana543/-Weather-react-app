import React from "react";

export default function forecastMain(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <p>{day()}</p>
      {/* <img src="/" alt="weather-forcast" /> */}
      <img
        src={props.data.condition.icon_url}
        alt="weather"
        className="wet-for-icon"
      />
      <div className="wth-forc-temperature">
        <span className="temp-min">
          {Math.round(props.data.temperature.minimum)}&deg;
        </span>
        <span className="temp-max">
          {Math.round(props.data.temperature.maximum)}&deg;
        </span>
      </div>
    </div>
  );
}
