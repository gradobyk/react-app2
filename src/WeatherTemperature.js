import React, { useState} from "react";

import "./WeatherTemperature.css";



export default function WeatherTemperature(props) {
	const [unit, setUnit] = useState("celsius");
	function showFahrenheit(event) {
		event.preventDefault();
		setUnit("fahrenheit");
	}

	function showCelsius(event) {
		event.preventDefault();
		setUnit("celsius");
	}

	function fahrenheit() {
		return (props.celsius * 9) / 5 + 32;

	}
	if (unit === "celsius") {
	return (
    <span>
      <strong className="tempAll ">{props.celsius}</strong>
      
      <span className="temp-units d-none d-md-block">
        °C |{" "}
        <a href="/" onClick={showFahrenheit}>
          °F
        </a>
      </span>
    </span>
  );
	} else {

		return (
      <span>
        <strong className="tempAll">{Math.round(fahrenheit ())}</strong>
        <span className="temp-units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          |{" "}
            °F 
        </span>
      </span>
    );
	}
}