import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";

export default function () {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-6">
            <input type="search" placeholder="Enter city" autoFocus="on" />
          </div>

          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>New York</h1>

      <ul>
        <li>Monday, 19th September 2022</li>
        <li>Partly Sunny</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://assets.msn.com/weathermapdata/1/static/svg/72/v2/card_fix_partlysunny/PartlyCloudyDayV3.svg"
              alt="Partly sunny"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">27</span>

              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 60%</li>
            <li>Precipitation: 14%</li>
            <li>Wind: 5km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
