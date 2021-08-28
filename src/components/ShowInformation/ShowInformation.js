import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import ShowdailyData from "../ShowDailyData/ShowdailyData";
import "./ShowInformation.css";

const ShowInformation = ({ item }) => {
  
  return (
    <div className="weather-information">
      <div className="history">
        <div className="weather-information">
          <div className="weather-controler name-city">
            <h4>{item.data.name}</h4>
          </div>
          <div className="weather-controler more-information">
            {item.data.weather[0].description}
          </div>
          <div className="weather-controler temper">
            <h6>{Math.round(item.data.main.temp)}℃</h6>
          </div>
          <div className="weather-controler">
            {new Date().toLocaleTimeString()}{" "}
          </div>
          <div className="img-weather">
            <img
              src={`http://openweathermap.org/img/w/${item.data.weather[0].icon}.png`}
              alt=""
            />
          </div>

          <ShowdailyData lon={item.data.coord.lon} lat={item.data.coord.lat} />
        </div>
      </div>
    </div>
  );
};

export default ShowInformation;
