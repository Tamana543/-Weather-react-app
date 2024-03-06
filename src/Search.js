import React from "react";
import MainDate from "./MainDate";
import WeatherTemperature from "./weatherTemperature";
import WeatherForcast from "./WeatherForcast";

export default function Search(props) {
  return (
    <div className="Search">
      <h2 className="head">{props.Time.City}</h2>
      <div className="current-degree">
        <p className="CD-main">
          <img src={props.Time.icon} alt="weather" className="weather-icon" />
          <WeatherTemperature celsius={props.Time.temperature} />
        </p>
        <div className="second">
          <p className="date" id="date">
            <MainDate Time={props.Time.time} />
          </p>
          <ul className="description-main">
            <li className="description">{props.Time.description}</li>
            <li className="humidity">
              Humidity: {Math.round(props.Time.humidity)}%
            </li>
            <li className="Wind">Wind: {Math.round(props.Time.wind)} Km/H</li>
          </ul>
        </div>
      </div>
      <div className="forcast">
        <WeatherForcast
          Icon={props.Time.icon}
          City={props.Time.City}
          Time={props.Time.time}
        />
      </div>
    </div>
  );
}
