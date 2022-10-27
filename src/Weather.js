import React, { useState } from "react";
import WeatherSearch from "./WeatherSearch";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css"

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ready: false});
	const [city, setCity] = useState(props.defaultCity);

	function handleResponse(response) {
		console.log(response.data);
		setWeatherData(
			{
				ready: true,
				coordinatesRes: response.data.coord,
				city: response.data.name,
				date: new Date(response.data.dt * 1000),
				temperature: Math.round(response.data.main.temp),
				wind: response.data.wind.speed,
				humidity: response.data.main.humidity,
				description: response.data.weather[0].description,
				icon: response.data.weather[0].icon,
			})
	}
	function search() {
		const apiKey = "c23a447e19efb6f70d65b26b00702afa";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

		axios.get(apiUrl).then(handleResponse);
	}
	
	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function handleCityChange(event) {
		setCity(event.target.value);

	}
  	if (weatherData.ready) {
      return (
        <div className="Weather shadow">
          <form onSubmit={handleSubmit} className="mb-3 inside">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city you are looking for.."
                  className="form-control shadow"
                  autoFocus="on"
                  onChange={handleCityChange}
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
          <WeatherSearch search={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinatesRes} />
        </div>
      );
    } else {

		search();

	return "Loading...";
	}
}
