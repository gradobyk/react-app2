import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"

export default function Weather() {
	const [ready, setReady] = useState(false);
	const [temperature, setTemperature] = useState(null);

	function handleResponse(response) {
		console.log(response.data);
		setTemperature(Math.round(response.data.main.temp));
		setReady(true);
	}
	
  	if (ready) {
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
              <h1 className="cityName">London</h1>
              <ul>
                <li>Last updated: Tuesday 10:00</li>
                <li>Cloudy</li>
              </ul>
    </div>
        <div className="row">
            <div className="col-6">
                <div className="temperature-parameter ">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                    alt="Cloudy"
                    className="float-left fistIcon"
                  />
                  <strong className="float-left tempAll">{temperature}</strong>
                  <span className="temp-units">
                    <a href="/" className="">°C</a> | <a href="/">°F</a>
                  </span>
                </div>
            </div>
            <div className="col-6 other-units">
                <ul>
                  <li>Humidity: 5 %</li>
                  <li>Wind: 80 km/h</li>
                </ul>
            </div>
            </div>
</div>
        
      );
    } else {

		const apiKey = "c23a447e19efb6f70d65b26b00702afa";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

	return "Loading...";
	}
}
