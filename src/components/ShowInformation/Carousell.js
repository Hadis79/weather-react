import InputWeather from "../InputWeather/InputWeather";
import ShowDailyData from "../ShowDailyData/ShowdailyData";
import img from "../../img/Spinner-1.gif";

import "react-awesome-slider/dist/styles.css";
import "./Carousell.css";
import MoreOptionToday from "./MoreOptionToday";
import { useState } from "react/cjs/react.development";
const Carousell = ({ storeInfo, getDataFromInput, loading,removeBtnHandler }) => {
 
  return (
    <div>
      <InputWeather getDataFromInput={getDataFromInput} />
      {loading ? (
        <div className="spinner">
          <img src={img} alt="Loading..." />
        </div>
      ) : (
        <div className="carousel">
          {" "}
          {storeInfo.map((item,index) => {
            return (
              <div className="history" key={item.data.id}>
                <div className="weather-information">
                <button
                  onClick={() => removeBtnHandler(item.data.id)}
                  className="card-btn"
                >
                  <i className="fas fa-times"></i>
                </button>
                  <div className="today">
                  
                    <div className="left-side">
                      <div className="weather-controler temper">
                        <h1>{Math.round(item.data.main.temp)}℃</h1>
                      </div>
                      <div className="weather-controler name-city">
                        <h6>{item.name}</h6>
                      </div>
                    </div>
                    <MoreOptionToday item={item} />
                  </div>

                  <ShowDailyData
                    lon={item.data.coord.lon}
                    lat={item.data.coord.lat}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Carousell;
