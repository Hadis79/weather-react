import { useState, useEffect } from "react";
import "./ShowDailyData.css";
const ShowDailyData = ({ lat, lon }) => {
  const [forecastWeather, setForCastWeather] = useState([]);
  useEffect(async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourely,minutely&units=metric&appid=00486d0b45f49ac1770bcbfb54102cc3`
    );
    const data = await response.json();
    setForCastWeather(data.daily);
  }, [lat, lon]);


  return (
    <div className="forecast-weather">
      {forecastWeather.map((days) => {
   
        return (
        
          <div className="one-day" key={days.weather.id} >
            <div className="name-of-day">
              {new Date(days.dt * 1000).toLocaleDateString("en", {
                weekday: "long",
              })}
            </div>
            <div className="icon">
              <img
                src={`http://openweathermap.org/img/w/${days.weather[0].icon}.png`}
                alt=""
              />
            </div>
            <div className="predict-days">
            <div className="days">
              <i class="fas fa-sun"></i> {Math.round(days.temp.day)}
            </div>
            <div className="description">{days.weather[0].description}</div>
            <div className="nights">
              <i class="fas fa-moon"></i> {Math.round(days.temp.night)}
            </div>
            </div>
          </div>
        )
       
      })}
    </div>
  );
};

export default ShowDailyData;
