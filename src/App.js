import {  useState } from "react";
import InputWeather from "./components/InputWeather/InputWeather";
import Header from "./components/Header/Header";
import img from "../src/img/Spinner-1.gif";
import "./App.css";
import useFetchData from "./components/FetchData/useFetchData";

function App() {
  const [saveCity, setSaveCity] = useState("");

  const getDataFromInput = (dataInput) => {
    setSaveCity(dataInput);
  };
const [localstorage,loading,error]=useFetchData(saveCity)
  return (
    <div className="body">
      <div className={`card`}>
        <InputWeather getDataFromInput={getDataFromInput} />
        {loading ? (
          <div className="spinner">
            <img src={img} alt="Loading..." />
          </div>
        ) : (
          <>
            <div>
              <div className={`controler`}>{localstorage}</div>
            </div>
          </>
        )}
        {error && <h6>{error}</h6>}
        <div className="forward-backward-buttons">
          <button>
            <i class="fas fa-backward"></i>
          </button>
          <div> saved City </div>
          <button>
            <i class="fas fa-forward"></i>
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default App;
