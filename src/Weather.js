import React from "react";
import "./Weather.css"

export default function Weather() {
	let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };

	return (
    <form>
      <div className="Weather shadow">
        <form className="mb-3 inside">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city you are looking for.."
                className="form-control shadow"
                autoComplete="off"
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
            <li>Last updated: {weatherData.date}</li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="temperature-parameter ">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <strong className="float-left tempAll">
                {weatherData.temperature}
              </strong>
              <span className="Temp-units">
                <a href="/">°C</a> | <a href="/">°F</a>
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

      
    </form>
  );

}
