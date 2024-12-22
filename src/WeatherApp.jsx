import React , {useState} from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import './WeatherApp.css'

function WeatherApp() {
    const [weatherInfo , setWeatherInfo] = useState({
        city : "Delhi",
        feelslike : 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.07,
        humidity: 47,
        weather: "haze", 
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }

  return (
    <>
    <div className="weather-container">
    <h1 className="weather-heading"> WeatherScape</h1>
    <p className="weather-slogan">
       Discover your city's weather at a glance!
    </p >
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo} />
    </div>
    </>
  )
}

export default WeatherApp