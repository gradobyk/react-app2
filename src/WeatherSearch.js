import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "./WeatherSearch.css";


export default function WeatherSearch(props) {
	return (
    <div className="WeatherSearch">
      <div className="City-Time-Day-Temp">
        <h1 className="cityName">{props.search.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.search.date} />
          </li>
          <li className="text-capitalize">{props.search.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="">
            <WeatherIcon code={props.search.icon} size={52} />

            <WeatherTemperature celsius={props.search.temperature} />
          </div>
        </div>
        <div className="col-6 other-units">
          <ul>
            <li>Humidity: {props.search.humidity}%</li>
            <li>Wind: {props.search.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}