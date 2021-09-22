import { useState } from "react";
import "./InputWeather.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InputWeather = ({ getDataFromInput }) => {
  const [inputValue, setInputValue] = useState();
  const [citiesArray, setCitiesArray] = useState([]);
  const [languageLimit,setlnguageLimit]=useState(false)
  const valueHandler = (e) => {
    
    
    setInputValue(e.target.value);
  };
  const onKeyDownHandler=(e)=>{
    let letters = /^[A-Za-z]+$/;
    if(e.key.match(letters)){
      return true
    }else{
      toast.error('Enter City In English...',{
        position:'top-center',
        closeOnClick:true
      })
      e.preventDefault()
    }

  }

  const submitedHandler = (e) => {
    e.preventDefault();
    if (inputValue) {
      setCitiesArray([...citiesArray, inputValue]);
      getDataFromInput(inputValue);
      setInputValue("");
    } else {
      toast.error("You Should Add City...", {
        position: "top-center",
        closeOnClick: true,
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
          onKeyDown={onKeyDownHandler}
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
