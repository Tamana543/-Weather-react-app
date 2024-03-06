import React, { useState } from "react";
import axios from "axios";
import ForecastMain from "./forecastMain";

// import WeatherTemperature from "./weatherTemperature";

import "./WeatherForcast.css";

export default function WeatherForcast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(false);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="weatherForcast">
        <ForecastMain data={forecast[1]} />
      </div>
    );
  } else {
    const apiKey = `002f53aof18d4ab43a5e5047f8f74ctd`;
    const city = props.City;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
