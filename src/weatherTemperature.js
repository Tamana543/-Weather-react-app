import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function fahrenheiteActive(event) {
    event.preventDefault();
    setUnit("fahrenheite");
  }
  function celsiuseActive(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span>
        <span className="Weather-degree">
          {" "}
          {Math.round(props.celsius)}&deg;
        </span>
        <span className="unit">
          <span className="C">C</span>
          <span className="F">
            <a href="/" onClick={fahrenheiteActive}>
              F
            </a>
          </span>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <span className="Weather-degree"> {Math.round(fahrenheit)}&deg;</span>
        <span className="unit">
          <span className="C">
            <a href="/" onClick={celsiuseActive}>
              C
            </a>
          </span>
          <span className="F">F</span>
        </span>
      </span>
    );
  }
}
