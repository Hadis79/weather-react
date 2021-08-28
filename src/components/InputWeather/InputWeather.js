import { useState } from "react";
import "./InputWeather.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const InputWeather = ({ getDataFromInput }) => {
  const [inputValue, setInputValue] = useState();
  const [citiesArray, setCitiesArray] = useState([]);

  const valueHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitedHandler = (e) => {
    e.preventDefault();
    if (inputValue) {
      setCitiesArray([...citiesArray, inputValue]);
      getDataFromInput(inputValue);
      setInputValue("");
    } else {
      toast.error("You Should Add City...", {
        position: "top-center",
        closeOnClick:true,
      });
    }
  };
  console.log(citiesArray);
  return (
    <form onSubmit={submitedHandler} className="input-weather">
      <div className="text-input">
        <div className="icon">
          <i className="fas fa-globe-asia"></i>
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={valueHandler}
          placeholder="Enter Your City..."
        />
        <button className="send-btn" onClick={submitedHandler}>
          send
        </button>
        <ToastContainer />
      </div>
    </form>
  );
};

export default InputWeather;
