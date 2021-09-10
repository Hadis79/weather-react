import { useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import useFetchData from "./components/FetchData/useFetchData";
import Carousell from "./components/ShowInformation/Carousell";

function App() {
  const [saveCity, setSaveCity] = useState("");
const [index,setIndex]=useState('')

  const getDataFromInput = (dataInput) => {
    setSaveCity(dataInput);
  };
const removeBtnHandler=(id)=>{
 setIndex(id)
 
}

  const [storeInfo, loading, error] = useFetchData(saveCity,index);

  return (
    <div className="body">
      <div className={`card`}>
        <Header />

        <div>
          <Carousell
            loading={loading}
            getDataFromInput={getDataFromInput}
            storeInfo={storeInfo}
            removeBtnHandler={removeBtnHandler}
          />
        </div>

        {error && <h6>{error}</h6>}
      </div>
    </div>
  );
}

export default App;
