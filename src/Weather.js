import React, { useState } from "react";
import FormattedDate from "./FormattedDate"
import axios from "axios";
import "./Weather.css"

export default function Weather(props) {
	
	const [weatherData, setWeatherData] = useState({ready: false});

	function handleResponse(response) {
		console.log(response.data);
		setWeatherData(
			{
				ready: true,
				city: response.data.name,
				date: new Date(response.data.dt * 1000),
				temperature: Math.round(response.data.main.temp),
				wind: response.data.wind.speed,
				humidity: response.data.main.humidity,
				description: response.data.weather[0].description,
				icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",

			
			})
	}
	
  	if (weatherData.ready) {
      return (
        
<div className="Weather shadow">
    <form className="mb-3 inside">
        <div className="row">
            <div className="col-9">
                  <input
                    type="search"
                    placeholder="Type a city you are looking for.."
                    className="form-control shadow"
                    autoFocus="on"
                  />
            </div>
            <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-success w-100 buttom1 shadow"
                  />
            </div>
        </div>
    </form>
			
    <div className="City-Time-Day-Temp">
              <h1 className="cityName">{weatherData.city}</h1>
              <ul>
                <li> 
				<FormattedDate date={weatherData.date} />	
				</li>
                <li className="text-capitalize">{weatherData.description}</li>
              </ul>
    </div>
        <div className="row">
            <div className="col-6">
                <div className="temperature-parameter ">
                  <img
                    src= {weatherData.icon}
                    alt= {weatherData.description}
                    className="float-left fistIcon"
                  />
                  <strong className="float-left tempAll">{weatherData.temperature}</strong>
                  <span className="temp-units">
                    <a href="/" className="">°C</a> | <a href="/">°F</a>
                  </span>
                </div>
            </div>
            <div className="col-6 other-units">
                <ul>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {weatherData.wind} km/h</li>
                </ul>
            </div>
            </div>
</div>
        
      );
    } else {

		const apiKey = "c23a447e19efb6f70d65b26b00702afa";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

	return "Loading...";
	}
}
