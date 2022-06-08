import React, {useState} from "react";
import Axios from 'axios'
import Header from './Header';
//import Content from './Content';
import Footer from './Footer';

function App() {

  const [weather, setWeather] = useState("")

  const getWeather = () => {
Axios.get('https://api.weatherapi.com/v1/current.json?key=95fdf37b8f2e4a2a8e2171932220306&q=Massachusetts&aqi=yes').then((response)=> {
  setWeather('Temperature in ' + response.data.location.name + ", " + response.data.location.region + ' is ' + response.data.current.temp_f + ' degrees Farenheit')
    }
  );
};
  return (
    <div className="App">
      <Header />
      <br />
      <br />
      <br />
      {weather}
       <button id="btn" onClick={getWeather}> Weather Now </button>
      <Footer />
  </div>
  );
}

export default App;
