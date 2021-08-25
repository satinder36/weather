import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Country from "./Country";

function App() {
  const [country, setCountry] = useState("");
  const [countryInfo, setCountryInfo] = useState([]);

  const handleSubmit = () => {
    console.log("button clicked", country);

    fetch("https://restcountries.eu/rest/v2/name/" + `${country}`)
      .then((response) => response.json())
      .then((json) => console.log(json, setCountryInfo(json)));
  };
  return (
    <div className="App">
      {countryInfo.length ? (
        <Country countryInfo={countryInfo}></Country>
      ) : (
        <div>
          <input
            className="input"
            type="text"
            placeholder="Enter Country"
            onChange={(e) => setCountry(e.target.value)}
          ></input>
          <div className="submit-btn">
            <button onClick={handleSubmit} disabled={!country}>Submiit</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
