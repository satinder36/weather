import React, { useState } from "react";

function Country({ countryInfo }) {
  const [weather, setWeather] = useState([]);

  const handleSubmit = () => {
    console.log(
      "http://api.weatherstack.com/current?access_key=33178448effd978d82d9b81c3c5df7c3&query=" +
        `${countryInfo[0].capital}`
    );
    fetch(
      "http://api.weatherstack.com/current?access_key=33178448effd978d82d9b81c3c5df7c3&query=" +
        `${countryInfo[0].capital}`
    )
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <div>
      <div className="country-info">
        {countryInfo.map((info, index) => {
          return (
            <div key={index} className="country-list">
              <ul className="list">
                <li>Capital: {info.capital}</li>
                <li>Population :{info.population}</li>
                <li>
                  {" "}
                  <img src={info.flag} height="200px" width="200px"></img>
                </li>
              </ul>

              {/* Lating :{info.lating.map((lat,ind)=>{
               return <div key ={ind}>{lat}</div>
              })} */}
            </div>
          );
        })}

        <button onClick={handleSubmit}>Show Weather</button>
        {
            weather.map((info, index)=>{
                return <div key ={index}>
                    {info.current.temperature}
                    {info.weather_descriptions.wind_speed} 
                    {info.weather_descriptions.precip}
                    <img src={info.weather_icons[0]}></img>
                    </div>
            })
        }
      </div>
    </div>
  );
}

export default Country;
