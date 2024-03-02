import React from "react";
import MainDate from "./MainDate";

export default function Search(props) {
  return (
    <div className="Search">
      <h2 className="head">{props.Time.City}</h2>
      <div className="current-degree">
        <p className="CD-main">
          <img
            src={props.Time.icon}
            alt="weather image"
            className="weather-icon"
          />
          <span className="Weather-degree">
            {" "}
            {Math.round(props.Time.temperature)}&deg;
          </span>{" "}
          <span className="unit">
            <span className="C">
              <a href="/">C</a>
            </span>
            <span className="F">
              <a href="/">F</a>
            </span>
          </span>
        </p>
        <p className="date" id="date">
          <MainDate Time={props.Time.time} />
          {/* {weatherData.time.getDate()} */}

          {/* {weatherData.time.getHour()} */}
          {/* Friday 19:00 */}
        </p>
        <ul className="description-main">
          <li className="description">{props.Time.description}</li>
          <li className="humidity">
            Humidity: {Math.round(props.Time.humidity)}%
          </li>
          <li className="Wind">Wind: {Math.round(props.Time.wind)} Km/H</li>
        </ul>
        <div className="forcast">
          <h4>forcast</h4>
        </div>
      </div>
    </div>
  );
}
