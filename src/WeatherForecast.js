import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";

import WeatherForecastDay from "./WeatherForecastDay"



export default function WeatherForecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState(null);

	function handleResponse(response) {
		setForecast(response.data.daily);
		setLoaded(true);
}

	if (loaded) {
		return (
    <div className="WeatherForecast">
        <div className="row">
		  {forecast.map(function (dailyForecast, index) {
			if (index < 5) {
			 return (
          <div className="col" key={index}>
            <WeatherForecastDay data={dailyForecast} />
          </div>
			);
		}
	})}
        </div>
      </div>
    );
	

	} else {
let apiKey = "c23a447e19efb6f70d65b26b00702afa";
let lon = props.coordinates.lon;
let lat = props.coordinates.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);

return null;
	
	}
}