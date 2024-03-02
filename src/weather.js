import React, { useState } from "react";
import "./Weather.css";
import Search from "./Search";

import axios from "axios";
export default function Weather(props) {
  const [city, setCity] = useState(props.city);
  const [weatherData, setweatherData] = useState({});
  const [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    setweatherData({
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
  function searchCity() {
    const apiKey = "002f53aof18d4ab43a5e5047f8f74ctd";
    // const apiUrl = `https://api.openweathermap.org/data/3.0/weather?q=${city}&appid=${apiKey}&units=metric`;
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function takeSunmit(event) {
    event.preventDefault();
    searchCity();
  }
  function takeCity(event) {
    setCity(event.target.value);
  }
  if (loaded) {
    return (
      <div className="Weather-main">
        <h1>My Weather app 🙌</h1>
        <form onSubmit={takeSunmit}>
          <input
            type="search"
            placeholder="Write Your City Name."
            className="city-input"
            autoFocus="on"
            onChange={takeCity}
          />
          <input type="submit" className="btn" />
        </form>
        <Search Time={weatherData} />
      </div>
    );
  } else {
    searchCity();
    return "Loading 🔍..";
  }
}
