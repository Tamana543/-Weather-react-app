import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastMain from "./forecastMain";

import "./WeatherForcast.css";

export default function WeatherForcast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.City]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="weatherForcast">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div key={index}>
                <ForecastMain data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}

        {/*
        __Second way:
        <ForecastMain data={forecast[2]} />
        <ForecastMain data={forecast[3]} />
        <ForecastMain data={forecast[4]} />
        <ForecastMain data={forecast[5]} /> */}
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
