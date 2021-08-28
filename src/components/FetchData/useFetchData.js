import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import ShowInformation from "../ShowInformation/ShowInformation";



const useFetchData = (saveCity) => {
    const URL = "http://api.openweathermap.org/data/2.5/weather?q=";
    const apiKey = "00486d0b45f49ac1770bcbfb54102cc3";
    const [loading, setLoading] = useState(true);
    const [storeInfo, setStoreInfo] = useState(
      JSON.parse(localStorage.getItem("cities")) || []
    );
    const [error, setError] = useState(null);
   
  console.log(storeInfo);
    const getJsonData = async (url) => {
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("somthing went wrong...");
        }
        const data = await response.json();
        return data;
      } catch (err) {
        setError(err.message);
      }
    };
    useEffect(() => {
      async function fetchApi() {
        setLoading(true);
        let data = "";
       if(saveCity){

         data = await getJsonData(
           `${URL}${saveCity}&units=metric&cnt=3&appid=${apiKey}`
         );
         setStoreInfo([...storeInfo,{ name: data.name, data } ]);
         setLoading(false);
         
        }else{

        setStoreInfo([...storeInfo])
        setLoading(false)
        }
        
      }
      fetchApi();
    }, [saveCity]);
    useEffect(() => {
      localStorage.setItem("cities", JSON.stringify(storeInfo));
    }, [storeInfo]);
    console.log(storeInfo);
    let localstorage = storeInfo.map((item) => {
      return <ShowInformation key={item.index} item={item} />;
    });
   
    return [localstorage,loading,error]
}
 
export default useFetchData;