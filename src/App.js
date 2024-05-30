import hot from "./Assets/sunny.jpg";
import cool from "./Assets/cold.jpg";
import bg17 from "./Assets/bg17.png";
import cloudy from "./Assets/cloudy.png";
import Description from "./components/Description.jsx"
import "./App.css";

import "./App.css";
import { useEffect, useState } from "react";
import { getFormattedWeatherdata } from "./weatherService.js";

function App() {

  const[weather,setweather] = useState(null);
  const [units,setunits] = useState("metric");
  const [city, setCity] = useState("Kolkata");
  const [bg,setbg] = useState(bg17);

  useEffect(()=>{
    const fetchWeatherData = async() =>{
      try {
        const data = await getFormattedWeatherdata(city, units);
        setweather(data);

        const threshold = units === 'metric' ?20:60;
        if(data.temp<=threshold) setbg(cool);
        else setbg(hot);
      } catch (error) {
        alert("Please check Your input ");
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  },[units,city]);

  const handleUnitClicks = (e) => {
   const button = e.currentTarget;
   const text = button.innerText.slice(1);
  //  console.log(text);

   const isCelcius = text === 'C';
   button.innerText = isCelcius ? '°F' : '°C';
   setunits(isCelcius ?  'metric' : 'imperial');
  };

  // const handleCityChange = (e) => {
  //   setCity(e.target.value);
  // };

  const enterKeyPressed =(e) => {
    if(e.key === "Enter"){
      setCity(e.target.value);
      e.target.blur();
    }
  };

  

  return (
    <>
      <div className="app" style={{ backgroundImage: `url(${bg})` }}>
        <div className="overlay">

          {weather && (
              <div className="container">
                <div className="section section-input">
                  <input
                  onKeyDown={enterKeyPressed}
                    type="text"
                    name="city"
                    placeholder="Enter City..."
                    // value={city}
                    // onChange={handleCityChange}
                    
                  
                  ></input>
                  {/* <button onClick={(e)=>handleUnitClicks(e)}><FaSearch/></button> */}
                  <button onClick={(e)=>handleUnitClicks(e)}>°F</button>
                </div>

                <div className="section section-temperature">
                  <div className="icon">
                    <h3>{`${weather.name},${weather.country}`}</h3>
                    <img src={weather.iconURL} alt="Weather Icon" className="wicn" />
                    <h3>{weather.description}</h3>
                  </div>

                  <div className="temparature">
                    <h1>{`${weather.temp.toFixed()}°${units==='metric'? 'C' : 'F'}`}</h1>
                  </div>
                </div>

                {/* Botom Compartment */}
                {/* <div className="desc">
                  <Description weather={weather} units={units}/>
                </div> */}
                  <Description weather={weather} units={units}/>

              </div>


          )};


        </div>
      </div>
    </>
  );
}

export default App;
