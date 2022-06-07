import React, {useState} from "react";
import Axios from 'axios'
import Header from './Header';
import './App.css';

function App() {

  const [weather, setWeather] = useState("")

  const getWeather = () => {
Axios.get('https://api.weatherapi.com/v1/current.json?key=95fdf37b8f2e4a2a8e2171932220306&q=Massachusetts&aqi=yes').then((response)=> {
  console.log(response.data.location.name + ", " + response.data.location.region);
  setWeather('Temperature in ' + response.data.location.name + ", " + response.data.location.region + ' is ' + response.data.current.temp_f + ' degrees Farenheit')
    }
  );
};
  return (
    <div className="App">
      <Header />
       <button onClick={getWeather}> Weather Now </button>
      {weather}
  </div>
  );
}

export default App;
