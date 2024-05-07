import {useState} from "react";
import WeatherCard from './WeatherCard.js';

function Weather ()
{
const [weatherData, setWeatherData] = useState([
    { day: "Monday", condition: "Sunny", temperature: "22°C" },
    {day: "Tuesday",condition: "Cloudy", temperature: "20°C" },
    {day: "Wednesday",condition: "Rainy", temperature: "18°C" },
    {day: "Thursday",condition: "Cloudy", temperature: "19°C" }
    ]);

    return (
        <div>
        {weatherData.map((weather, index) => (
        <WeatherCard
        key={index}
        day={weather.day}
        condition={weather.condition}
        temperature={weather.temperature}
        />
        ))}
        </div>
        );
        



}


export default Weather;