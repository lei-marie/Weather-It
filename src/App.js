import React, {useState} from "react";
import Axios from 'axios'
import './App.css';

function App() {

  const [weather, setWeather] = useState([])

  const getWeather = () => {
Axios.get('https://api.weatherapi.com/v1/current.json?key=95fdf37b8f2e4a2a8e2171932220306&q=Massachusetts&aqi=yes').then((response)=> {
  console.log(response.data.location);
  setWeather(response.data.location)
    }
  );
};
  return (
    <div>
      What's the weather today? <button onClick={getWeather}> Weather Now </button>
      {weather}
  </div>
  );
}

export default App;
