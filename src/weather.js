import React, { useState } from "react";
import "./Weather.css";
import MainDate from "./MainDate";
import axios from "axios";
export default function Weather() {
  const [weatherData, setWeatherData] = useState({});
  const [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      City: response.data.city,
      icon: response.data.condition.icon_url,
      time: new Date(response.data.time * 1000),
    });
    console.log(response.data);

    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="Weather-main">
        <h1>My Weather app 🙌</h1>
        <form>
          <input
            type="search"
            placeholder="Write Your City Name."
            className="city-input"
            autoFocus="on"
          />
          <input type="submit" className="btn" />
        </form>
        <h2 className="head">{weatherData.City}</h2>
        <div className="current-degree">
          <p className="CD-main">
            <img
              src={weatherData.icon}
              alt="weather image"
              className="weather-icon"
            />
            <span className="Weather-degree">
              {" "}
              {Math.round(weatherData.temperature)}&deg;
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
            <MainDate Time={weatherData.time} />
            {/* {weatherData.time.getDate()} */}

            {/* {weatherData.time.getHour()} */}
            {/* Friday 19:00 */}
          </p>
          <ul className="description-main">
            <li className="description">{weatherData.description}</li>
            <li className="humidity">
              Humidity: {Math.round(weatherData.humidity)}%
            </li>
            <li className="Wind">Wind: {Math.round(weatherData.wind)} Km/H</li>
          </ul>
          <div className="forcast">
            <h4>forcast</h4>
          </div>
        </div>
      </div>
    );
  } else {
    const city = "Afghanistan";
    const apiKey = "002f53aof18d4ab43a5e5047f8f74ctd";
    // const apiUrl = `https://api.openweathermap.org/data/3.0/weather?q=${city}&appid=${apiKey}&units=metric`;
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading 🔍..";
  }
}
